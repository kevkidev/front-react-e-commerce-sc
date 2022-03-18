import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Database, getDatabase, ref, set } from "firebase/database";
import { Models } from "types/models";
import { AppUser, CloudApp } from "types/types.d";
import { FirebaseConfig } from "./FirebaseConfig";
Database;

export namespace Firebase {
  export function initialize(): CloudApp<FirebaseApp, Database> {
    const app = initializeApp(FirebaseConfig.config);
    return {
      app: app,
      db: getDatabase(app),
    };
  }

  export function getLoggedUser(): AppUser {
    const email = getAuth()?.currentUser?.email;
    return { email: email ? email : undefined };
  }

  export function logout(callback: () => void) {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("good bye");
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
      if (user) {
        console.log("always logged!");
        callback.onLogged(getLoggedUser());
      } else {
        console.log("not logged anymore!");
        callback.onNotLogged();
      }
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

  export function createProduct(product: Models.Product, db: Database) {
    const { name, quantity, description, category, imageUrl, owner } = product;
    db &&
      set(ref(db, "accounts/" + owner.uid + "/products/" + product.uid), {
        name,
        quantity,
        description,
        category: category.uid,
        imageUrl,
        owner: owner.uid,
      }).then(() => console.log("Database: new product ok"));
  }
}
