import {
  endBefore,
  getDatabase,
  limitToFirst,
  onValue,
  orderByKey,
  query,
  QueryConstraint,
  ref,
  set,
  startAfter,
  update,
} from "firebase/database";
import { Firebase } from "services/Firebase";
import { DTO } from "types/dto";
import { ListResultLimits } from "types/types";

export namespace CatalogFirebaseService {
  export function create(value: DTO.Catalog) {
    const db = getDatabase();
    const PATH = `${value.ownerUid}/${Firebase.DB_NODE_CATALOGS}/${value.uid}`;
    db &&
      set(ref(db, PATH), value).then(() =>
        console.log(`Database: create catalog: ${value.uid}`)
      );
  }

  export function modify(value: DTO.Catalog) {
    const db = getDatabase();
    const PATH = `${value.ownerUid}/${Firebase.DB_NODE_CATALOGS}/${value.uid}`;
    db &&
      update(ref(db, PATH), value).then(() =>
        console.log(`Database: update catalog: ${value.uid}`)
      );
  }

  interface IReadAll {
    ownerUid: string;
    maxItems: number;
    listResultLimits?: ListResultLimits;
    onExists: (value: DTO.Catalog[], limits: ListResultLimits) => void;
  }

  // @todo: transform as genic method
  export function readAll(args: IReadAll) {
    const { ownerUid, maxItems, onExists, listResultLimits } = args;

    const db = getDatabase();
    const PATH = `${ownerUid}/catalogs/`;
    const constraints: QueryConstraint[] = [
      orderByKey(),
      limitToFirst(maxItems),
    ];

    if (listResultLimits) {
      const { firstKey, lastKey } = listResultLimits;
      if (firstKey) constraints.push(endBefore(firstKey));
      if (lastKey) constraints.push(startAfter(lastKey));
    }

    const accountRef = query(ref(db, PATH), ...constraints);

    onValue(accountRef, (snapshot: any) => {
      if (!snapshot.val()) return;

      const keys = Object.keys(snapshot.val());
      const firstKey = keys[0];
      const lastKey = keys[keys.length - 1];

      const limits = {
        firstKey,
        lastKey,
      };
      onExists(Object.values(snapshot.val()), limits);
    });
  }
}
