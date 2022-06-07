import { Firebase } from "services/Firebase";
import { AccountFirebaseService } from "./firebase/AccountFirebaseService";
import { AuthFirebaseService } from "./firebase/AuthFirebaseService";
import { CatalogFirebaseService } from "./firebase/CatalogFirebaseService";
import { ProductFirebaseService } from "./firebase/ProductFirebaseService";

export namespace CloudService {
  export function getService() {
    return Firebase;
  }

  export function getProductService() {
    return ProductFirebaseService;
  }

  export function getAuthService() {
    return AuthFirebaseService;
  }

  export function getAccountService() {
    return AccountFirebaseService;
  }

  export function getCatalogService() {
    return CatalogFirebaseService;
  }
}
