import { RestService } from "services/RestService";
import {
  FormResponseLevel,
  FORM_MESSAGE_LEVEL_SUCCESS,
  JsonResponse,
  JsonResponseSuccess,
} from "types/types.d";

interface ISignUpServiceRest {
  email: string;
  password: string;
  callback: {
    onFail: (message: string) => void;
    onEmailAlready: (message: string) => void;
    onSuccess: (message: string, level: FormResponseLevel) => void;
  };
}

export function SignUpServiceRest(args: ISignUpServiceRest) {
  const { email, password, callback } = args;
  const fetchInit = {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      Authorization: "Basic " + password,
      "Content-Type": "application/json",
    },
  };

  fetch(process.env.REACT_APP_AUTH_SERVICE_URI + "/signUp", fetchInit)
    .then((response) => {
      return { json: response.json(), status: response.status };
    })
    .then(({ json }) => {
      return json as Promise<JsonResponse>;
    })
    .then((data) => {
      if (!data?.fail) return data?.success;

      const ERROR_CODE_EMAIL_ALREADY = "auth/email-already-in-use";
      callback.onEmailAlready(
        ERROR_CODE_EMAIL_ALREADY === data.fail.code
          ? "Oops! You already have an account with this email. Go to login or reset your password please."
          : data.fail.message
      );
    })
    .then((success: JsonResponseSuccess | undefined) => {
      if (!success) return;

      callback.onSuccess(
        `${success.message} You can close this modal.`,
        FORM_MESSAGE_LEVEL_SUCCESS
      );
    })
    .catch((error) => {
      RestService.handleCatch(error, callback.onFail);
    });
}
