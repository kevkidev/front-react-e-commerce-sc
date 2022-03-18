import { SignInServiceRest } from "./api/SignInServiceRest";
import { Firebase } from "./Firebase";

interface ParamsAuthService {
  email: string;
  password: string;
  callback: {
    onSuccess: () => void;
    onEmailNotVerified: () => void;
    onFail: () => void;
  };
}

export namespace AuthService {
  export function signIn(params: ParamsAuthService) {
    const { email, password, callback } = params;

    const handleSuccess = () => {
      // get tokens from backend
      SignInServiceRest.call({
        email,
        password,
        callback: { onFail: callback.onFail },
      });
      callback.onSuccess();
    };

    // check form Firebase
    Firebase.signIn({
      email,
      password,
      executor: {
        onSuccess: handleSuccess,
        onEmailNotVerified: callback.onEmailNotVerified,
        onFail: callback.onFail,
      },
    });
  }
}
