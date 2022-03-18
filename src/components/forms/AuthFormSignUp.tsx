import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { RestService } from "services/RestService";
import {
  Auth,
  FetchResponse,
  FormResponse,
  FORM_MESSAGE_LEVEL_SUCCESS,
  HTTP_STATUS_CLASS_SUCCESS,
  JsonResponseSignUp,
} from "types/types.d";
import { AuthForm } from "./AuthForm";
import { FormResponseMessageUtil } from "./FormResponseMessage";

interface Props {
  onFormSent: (value: boolean) => void;
}

export function AuthFormSignUp({ onFormSent }: Props) {
  const [formResponse, setFormResponse] = useState<FormResponse>(
    FormResponseMessageUtil.defaultFormResponse
  );

  const ERROR_CODE_EMAIL_ALREADY = "auth/email-already-in-use";

  const handleSubmit: SubmitHandler<Auth> = ({ email, password }: Auth) => {
    //@todo: move this code to a specific service
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
      .then(({ json, status }: FetchResponse) => {
        if (HTTP_STATUS_CLASS_SUCCESS === RestService.getStatusClass(status))
          return json;

        json.then((data: JsonResponseSignUp) => {
          const message =
            ERROR_CODE_EMAIL_ALREADY === data.code
              ? "Oops! You already have an account with this email. Go to login or reset your password please."
              : data.message;
          setFormResponse(FormResponseMessageUtil.buildResponse(message));
        });
        return undefined;
      })
      .then((data: JsonResponseSignUp | undefined) => {
        if (!data) return;

        setFormResponse(
          FormResponseMessageUtil.buildResponse(
            `${data.message} You can close this modal.`,
            FORM_MESSAGE_LEVEL_SUCCESS
          )
        );
        onFormSent(true);
      })
      .catch((error) => {
        const message =
          "We are sorry! Something wong. Check your internet connection. Otherwise contact our support team please.";
        setFormResponse(FormResponseMessageUtil.buildResponse(message));
        console.error(error.message);
      });
  };

  return (
    <>
      <AuthForm onSend={handleSubmit} formResponse={formResponse} asSignUp />
    </>
  );
}
