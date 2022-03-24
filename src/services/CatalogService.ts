import { DTO } from "types/dto";
import { FetchInput, ListResultLimits } from "types/types";
import { Util } from "utils/Array";
import { v4 as uuidv4 } from "uuid";
import { CloudService } from "./cloud/CloudService";

export namespace CatalogService {
  export function create(value: DTO.Catalog) {
    const catalog = { ...value };
    catalog.uid = uuidv4();
    CloudService.getCatalogService().create(catalog);
  }

  export function update(value: DTO.Catalog) {
    const catalog = { ...value };
    CloudService.getCatalogService().modify(catalog);
  }

  // @todo migrate all next functions into CatalogFirebaseService

  export function fetchCatalogs(args: FetchInput<DTO.Catalog>) {
    const { onFetch, listResultLimits, maxItems } = args;
    const user = CloudService.getAuthService().getLoggedUser();
    if (!user) return;

    const onExists = (list: DTO.Catalog[], limits: ListResultLimits) => {
      onFetch(Util.Array.sortAsc<DTO.Catalog>(list, "title"), limits);
    };

    CloudService.getCatalogService().readAll({
      ownerUid: user.uid,
      maxItems,
      listResultLimits,
      onExists,
    });
  }

  export function findCatalog(catalogUid: string): DTO.Catalog {
    // @TODO
    return {
      uid: catalogUid,
      title: "ZE e,op opo",
      ownerUid: currentAccount.uid,
      productsUids: ["1", "2"],
      imageUrl:
        "https://images.pexels.com/photos/6568687/pexels-photo-6568687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      status: "alive",
    };
  }

  export const currentAccount = {
    uid: "1-eiezuirui", // get from firebase
    email: "azeaze@azeaze", // get from firebase
    invoiceAddress: {
      uid: "",
      city: "",
      street: "",
      zipCode: 0,
      firstName: "", // consolidate
      lastName: "", // consolidate
      phone: "", //consolidate};
    },
    deliveryAddress: {
      uid: "",
      city: "",
      street: "",
      zipCode: 0,
      firstName: "", // consolidate
      lastName: "", // consolidate
      phone: "", //consolidate};
    },
  };
}
