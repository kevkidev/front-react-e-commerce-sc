import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Model } from "../models";

let app: Promise<FirebaseApp> | undefined = undefined;

function getInstance() {
  return app ? app : Firebase.createApp();
}

export namespace Firebase {
  // eslint-disable-next-line no-unused-vars
  export function createApp() {
    // console.log("initApp");

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
    // eslint-disable-next-line no-unused-vars
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

  export function signIn(
    email: string,
    secret: string,
    executor: {
      // eslint-disable-next-line no-unused-vars
      resolve: (userCredential: UserCredential) => void;
      reject: () => void;
    }
  ) {
    getInstance().then(() => {
      signInWithEmailAndPassword(getAuth(), email, secret)
        .then((userCredential) => {
          executor.resolve(userCredential);
        })
        .catch(() => {
          executor.reject();
        });
    });
  }

  export namespace Database {
    export function createProduct(product: Model.Product) {
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
