import { Firebase } from "services/Firebase";

export namespace CloudService {
  export function get() {
    return Firebase;
  }
}
