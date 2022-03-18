import { LocalData } from "services/LocalData";
import { RestService } from "services/RestService";
import { HTTP_STATUS_CLASS_SUCCESS } from "types/types.d";

interface ParamsSignIn {
  email: string;
  password: string;
  callback: {
    onFail: (message: string) => void;
  };
}

export namespace SignInServiceRest {
  export function call({ email, password, callback }: ParamsSignIn) {
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

    fetch(process.env.REACT_APP_SERVER_AUTH + "/login", fetchInit)
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
        LocalData.setUser(data.user);
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
}
