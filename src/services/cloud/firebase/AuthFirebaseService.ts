import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AppUser } from "types/types";

export namespace AuthFirebaseService {
  export function getLoggedUser(): AppUser | undefined {
    const auth = getAuth()?.currentUser;
    if (!auth) return;
    return {
      uid: auth.uid,
      email: auth.email ? auth.email : "",
    };
  }

  export function logout(callback: () => void) {
    const auth = getAuth();
    signOut(auth).then(() => {
      callback();
    });
  }

  interface ISubscribeToAuthState {
    onLogged: (user: AppUser) => void;
    onNotLogged: () => void;
  }
  export function subscribeToAuthState(callback: ISubscribeToAuthState) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      const loggedUser = getLoggedUser();
      if (!user || !loggedUser) {
        callback.onNotLogged();
        return;
      }
      callback.onLogged(loggedUser);
    });
  }

  interface ISignIn {
    email: string;
    password: string;
    executor: {
      onSuccess: () => void;
      onEmailNotVerified: () => void;
      onFail: () => void;
    };
  }

  export function signIn({ email, password, executor }: ISignIn) {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) return userCredential;
        executor.onEmailNotVerified();
        return;
      })
      .then((userCredential) => {
        if (!userCredential) return;
        executor.onSuccess();
      })
      .catch(() => {
        executor.onFail();
      });
  }
}
