import { DTO } from "types/dto";
import { AppUser } from "types/types";
import { CloudService } from "./cloud/CloudService";

export namespace AccountService {
  export function createFromUser(value: AppUser) {
    create({
      uid: value.uid,
      email: value.email,
      deliveryAddressUid: "",
      invoiceAddressUid: "",
    });
  }
  export function create(value: DTO.Account) {
    CloudService.getAccountService().create(value);
  }

  export function read(
    accountUid: string,
    onExists: (value: DTO.Account) => void
  ) {
    CloudService.getAccountService().read(accountUid, onExists);
  }

  export function remove(value: DTO.Account) {
    CloudService.getAccountService().remove(value);
  }
}
