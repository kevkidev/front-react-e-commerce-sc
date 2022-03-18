import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Models } from "types/models";

let app: Promise<FirebaseApp> | undefined = undefined;

function getInstance() {
  return app ? app : Firebase.createApp();
}

export namespace Firebase {
  export function createApp() {
    const app = initializeApp({
      apiKey: "AIzaSyCgJo0rhPdg_BcyBRIScaHeHLoOV_-S7e4",
      authDomain: "fir-react-5db69.firebaseapp.com",
      databaseURL:
        "https://fir-react-5db69-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "fir-react-5db69",
      storageBucket: "fir-react-5db69.appspot.com",
      messagingSenderId: "1052058791238",
      appId: "1:1052058791238:web:9559b7832e8934c5c5c947",
    });
    // const resolve = () => app;
    // const reject = () => {};
    return new Promise<FirebaseApp>((resolve) => {
      resolve(app);
    });
  }

  export function logout() {
    getInstance().then(() => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("good bye");
        })
        .catch((error) => {
          console.log("Oops!");
          console.error(error);
        });
    });
  }

  export function checkAuth(executor: {
    resolve: (user: User) => void;
    reject: () => void;
  }) {
    getInstance().then(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // const uid = user.uid;
          executor.resolve(user);
        } else {
          executor.reject();
        }
      });
    });
  }

  interface ParamsSignIn {
    email: string;
    password: string;
    executor: {
      onSuccess: () => void;
      onEmailNotVerified: () => void;
      onFail: () => void;
    };
  }
  export function signIn({ email, password, executor }: ParamsSignIn) {
    getInstance().then(() => {
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
    });
  }

  export namespace Database {
    export function createProduct(product: Models.Product) {
      getInstance().then((app) => {
        const db = getDatabase(app);
        const { name, quantity, description, category, imageUrl, owner } =
          product;
        db &&
          set(ref(db, "accounts/" + owner.uid + "/products/" + product.uid), {
            name,
            quantity,
            description,
            category: category.uid,
            imageUrl,
            owner: owner.uid,
          }).then(() => console.log("Database: new product ok"));
      });
    }
  }
}
