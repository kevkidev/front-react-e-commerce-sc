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

  export function read(
    catalogUid: string,
    onRead: (data: DTO.Catalog) => void
  ) {
    const user = CloudService.getAuthService().getLoggedUser();
    if (!user) return;

    CloudService.getCatalogService().read(user.uid, catalogUid, onRead);
  }
}
