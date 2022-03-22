import { LocalData } from "services/LocalData";
import { RestService } from "services/RestService";
import { AppUser, HTTP_STATUS_CLASS_SUCCESS } from "types/types.d";

interface ParamsSignIn {
  email: string;
  password: string;
  callback: {
    onFail: (message: string) => void;
    onSuccess: (user: AppUser) => void;
  };
}

export function SignInServiceRest({ email, password, callback }: ParamsSignIn) {
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

  fetch(process.env.REACT_APP_AUTH_SERVICE_URI + "/login", fetchInit)
    .then((response) => {
      return { json: response.json(), status: response.status };
    })
    .then(({ json, status }) => {
      if (HTTP_STATUS_CLASS_SUCCESS === RestService.getStatusClass(status))
        return json;

      callback.onFail("Oops, Something wrong!");
    })
    .then(({ data }: RestDataSignIn) => {
      if (!data) return;

      LocalData.setAccessToken(data.accessToken);
      LocalData.setRefreshToken(data.refreshToken);
      callback.onSuccess(data.user as AppUser);
    })
    .catch((error) => {
      RestService.handleCatch(error, callback.onFail);
    });
}

interface RestDataSignIn {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      uid: string;
      email: string;
    };
  };
}
