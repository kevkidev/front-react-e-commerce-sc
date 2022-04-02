import {
  endBefore,
  getDatabase,
  limitToFirst,
  onValue,
  orderByKey,
  query,
  QueryConstraint,
  ref,
  startAfter,
} from "firebase/database";
import { Firebase } from "services/Firebase";
import { DTO } from "types/dto";
import { ListResultLimits } from "types/types";

export namespace CatalogFirebaseService {
  export function create(value: DTO.Catalog) {
    const path = `${value.ownerUid}/${Firebase.DB_NODE_CATALOGS}/${value.uid}`;
    Firebase.create(value, path, () => {
      console.log(`Database: create catalog: ${value.uid}`);
    });
  }

  export function modify(value: DTO.Catalog) {
    const path = `${value.ownerUid}/${Firebase.DB_NODE_CATALOGS}/${value.uid}`;
    Firebase.modify(value, path, () => {
      console.log(`Database: update catalog: ${value.uid}`);
    });
  }

  interface IReadAll {
    ownerUid: string;
    maxItems: number;
    listResultLimits?: ListResultLimits;
    onExists: (value: DTO.Catalog[], limits: ListResultLimits) => void;
  }
  export function readAll(args: IReadAll) {
    const { ownerUid, maxItems, onExists, listResultLimits } = args;
    const db = getDatabase();
    const PATH = `${ownerUid}/${Firebase.DB_NODE_CATALOGS}/`;
    const constraints: QueryConstraint[] = [
      orderByKey(),
      limitToFirst(maxItems),
    ];
    if (listResultLimits) {
      const { firstKey, lastKey } = listResultLimits;
      if (firstKey) constraints.push(endBefore(firstKey));
      if (lastKey) constraints.push(startAfter(lastKey));
    }

    const catalogQuery = query(ref(db, PATH), ...constraints);
    onValue(catalogQuery, (snapshot: any) => {
      if (!snapshot.val()) return;

      const keys = Object.keys(snapshot.val());
      const limits = {
        firstKey: keys[0],
        lastKey: keys[keys.length - 1],
      };
      onExists(Object.values(snapshot.val()), limits);
    });
  }

  export function read(
    ownerUid: string,
    catalogUid: string,
    onExists: (value: DTO.Catalog) => void
  ) {
    const PATH = `${ownerUid}/${Firebase.DB_NODE_CATALOGS}/${catalogUid}`;
    Firebase.read<DTO.Catalog>(PATH, onExists);
  }
}
