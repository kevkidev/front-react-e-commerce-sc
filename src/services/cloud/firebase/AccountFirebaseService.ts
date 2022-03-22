import { getDatabase, onValue, ref, set } from "firebase/database";
import { Firebase } from "services/Firebase";
import { DTO } from "types/dto";

export namespace AccountFirebaseService {
  export function create(value: DTO.Account) {
    const db = getDatabase();
    const path = "accounts/" + value.uid;
    db &&
      set(ref(db, path), value).then(() =>
        console.log("Database: new account ok")
      );
  }

  export function read(
    accountUid: string,
    onExists: (value: DTO.Account) => void
  ) {
    const db = getDatabase();
    const accountRef = ref(db, `${Firebase.DB_NODE_ACCOUNTS}/${accountUid}`);
    onValue(accountRef, (snapshot: any) => {
      const account: DTO.Account = snapshot.val();
      onExists(account);
    });
  }

  export function remove(value: DTO.Account) {
    const db = getDatabase();
    const path = "accounts/" + value.uid;
    db &&
      set(ref(db, path), null).then(() =>
        console.log("Database: remove account: " + value.uid)
      );
  }
}
