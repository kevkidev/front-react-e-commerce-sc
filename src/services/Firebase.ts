import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, update } from "firebase/database";

export namespace Firebase {
  export const DB_NODE_ACCOUNTS = "accounts";
  export const DB_NODE_CATALOGS = "catalogs";
  export const DB_NODE_PRODUCTS = "products";

  export function initialize() {
    initializeApp({
      apiKey: "AIzaSyCgJo0rhPdg_BcyBRIScaHeHLoOV_-S7e4",
      authDomain: "fir-react-5db69.firebaseapp.com",
      databaseURL:
        "https://fir-react-5db69-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "fir-react-5db69",
      storageBucket: "fir-react-5db69.appspot.com",
      messagingSenderId: "1052058791238",
      appId: "1:1052058791238:web:9559b7832e8934c5c5c947",
    });
  }

  export function create<T>(value: T, path: string, onCreated?: () => void) {
    const db = getDatabase();
    db && set(ref(db, path), value).then(() => onCreated && onCreated());
  }

  export function modify(value: object, path: string, onUpdated?: () => void) {
    const db = getDatabase();
    db && update(ref(db, path), value).then(() => onUpdated && onUpdated());
  }

  export function read<T>(path: string, onExists: (value: T) => void) {
    const db = getDatabase();
    const query = ref(db, path);
    onValue(query, (snapshot: any) => {
      const found: T = snapshot.val();
      onExists(found);
    });
  }
}
