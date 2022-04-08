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

export namespace ProductFirebaseService {
  export function create(value: DTO.Product) {
    const path = `${value.ownerUid}/${value.catalogUid}/${Firebase.DB_NODE_PRODUCTS}/${value.uid}`;
    Firebase.create(value, path, () => {
      console.log(`Database: create product: ${value.uid}`);
    });
  }

  export function modify(value: DTO.Product) {
    const path = `${value.ownerUid}/${value.catalogUid}/${Firebase.DB_NODE_PRODUCTS}/${value.uid}`;
    Firebase.modify(value, path, () => {
      console.log(`Database: update product: ${value.uid}`);
    });
  }

  interface IReadFromCatalog {
    ownerUid: string;
    catalogUid: string;
    maxItems: number;
    listResultLimits?: ListResultLimits;
    onExists: (value: DTO.Product[], limits: ListResultLimits) => void;
  }
  export function readFromCatalog(args: IReadFromCatalog) {
    const { ownerUid, catalogUid, maxItems, onExists, listResultLimits } = args;

    const db = getDatabase();
    const PATH = `${ownerUid}/${catalogUid}/${Firebase.DB_NODE_PRODUCTS}/`;
    const constraints: QueryConstraint[] = [
      orderByKey(),
      limitToFirst(maxItems),
    ];

    if (listResultLimits) {
      const { firstKey, lastKey } = listResultLimits;

      if (firstKey) {
        constraints.push(endBefore(firstKey));
      }
      if (lastKey) {
        constraints.push(startAfter(lastKey));
      }
    }

    const dbQuery = query(ref(db, PATH), ...constraints);
    onValue(dbQuery, (snapshot: any) => {
      if (!snapshot.val()) return;

      const keys = Object.keys(snapshot.val());
      const limits = {
        firstKey: keys[0],
        lastKey: keys[keys.length - 1],
      };

      onExists(Object.values(snapshot.val()), limits);
    });
  }
}
