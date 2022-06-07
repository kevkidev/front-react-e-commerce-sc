import { DTO } from "types/dto";
import { AppUser, FormResponseLevel } from "types/types";
import { AccountService } from "./AccountService";
import { SignInServiceRest } from "./api/SignInServiceRest";
import { SignUpServiceRest } from "./api/SignUpServiceRest";
import { CloudService } from "./cloud/CloudService";

export namespace AuthService {
  interface ISignUp {
    email: string;
    password: string;
    callback: {
      onFail: (message: string) => void;
      onEmailAlready: (message: string) => void;
      onSuccess: (message: string, level: FormResponseLevel) => void;
    };
  }

  export function signUp(args: ISignUp) {
    const handleSuccess = (message: string, level: FormResponseLevel) => {
      args.callback.onSuccess(message, level);
    };
    const callback = { ...args.callback, onSuccess: handleSuccess };
    SignUpServiceRest({ ...args, callback });
  }

  interface ISignIn {
    email: string;
    password: string;
    callback: {
      onSuccess: () => void;
      onEmailNotVerified: () => void;
      onFail: () => void;
    };
  }

  export function signIn(params: ISignIn) {
    const { email, password, callback } = params;

    const handleSuccess = () => {
      const handleSuccess = (user: AppUser) => {
        // check if account exist into de DB: if not: add the account to the DB (=> first sign in)
        AccountService.read(user.uid, (account: DTO.Account) => {
          if (account) return;
          AccountService.createFromUser(user);
        });
        callback.onSuccess();
      };
      // get tokens from backend
      SignInServiceRest({
        email,
        password,
        callback: { onFail: callback.onFail, onSuccess: handleSuccess },
      });
    };

    // check form the cloud service
    CloudService.getAuthService().signIn({
      email,
      password,
      executor: {
        onSuccess: handleSuccess,
        onEmailNotVerified: callback.onEmailNotVerified,
        onFail: callback.onFail,
      },
    });
  }

  export function logout(onLogout: () => void) {
    CloudService.getAuthService().logout(onLogout);
  }

  export function getLoggedUser(): AppUser {
    const user = CloudService.getAuthService().getLoggedUser();
    if (!user) throw Error("Error: No user logged.");
    return user;
  }

  export function setOwner<T extends { ownerUid: string }>(input: T) {
    input.ownerUid = getLoggedUser()?.uid;
  }

  export function subscribeToAuthState(callback: {
    onLogged: (user: AppUser) => void;
    onNotLogged: () => void;
  }) {
    CloudService.getAuthService().subscribeToAuthState(callback);
  }
}
