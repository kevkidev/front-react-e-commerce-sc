import { getDatabase, ref, set } from "firebase/database";
import { Firebase } from "services/Firebase";
import { DTO } from "types/dto";

export namespace CatalogFirebaseService {
  export function create(value: DTO.Catalog) {
    const db = getDatabase();
    const PATH = `${Firebase.DB_NODE_ACCOUNTS}/${value.ownerUid}/${Firebase.DB_NODE_CATALOGS}/${value.uid}`;
    db &&
      set(ref(db, PATH), value).then(() =>
        console.log(`Database: create catalog: ${value.uid}`)
      );
  }
}
