import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";

let app: Promise<FirebaseApp> | undefined = undefined;

function getInstance() {
  return app ? app : Firebase.createApp();
}

export namespace Firebase {
  // eslint-disable-next-line no-unused-vars
  export function createApp() {
    console.log("initApp");

    const app = initializeApp({
      apiKey: "AIzaSyBJ99dSbyjuDkHDx-HDqc8y7Hq0GL2AQFk",
      authDomain: "test-api-28176.firebaseapp.com",
      databaseURL:
        "https://test-api-28176-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "test-api-28176",
      storageBucket: "test-api-28176.appspot.com",
      messagingSenderId: "290198149242",
      appId: "1:290198149242:web:dbe181708722a51c7443c3",
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

  export function checkAuth() {
    getInstance().then(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // const uid = user.uid;
          console.log("already logged" + user.email);
          return true;
        } else {
          console.log("Not logged!");
          return false;
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
}
