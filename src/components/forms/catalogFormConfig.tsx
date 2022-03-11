import { DTO } from "types/dto";
import {
  CatalogStatus,
  STATUS_ALIVE,
  STATUS_ARCHIVED,
  STATUS_DISABLED,
} from "types/types.d";
import { v4 as uuidv4 } from "uuid";
import { array, mixed, object, SchemaOf, string } from "yup";

export const defaultValue: DTO.Catalog = {
  uid: uuidv4(),
  imageUrl: "",
  ownerUid: "",
  productsUids: [],
  title: "",
  status: "alive",
};

export const schema: SchemaOf<DTO.Catalog> = object({
  uid: string().default(defaultValue.uid),
  imageUrl: string().default(defaultValue.imageUrl),
  ownerUid: string().default("ae23efa8-9b40-4604-a149-e9e9b5d464e0"),
  productsUids: array().default(defaultValue.productsUids),
  title: string()
    .trim()
    .matches(/^[\w\W]{3,60}$/, "Please enter a name of 3 to 60 characters.")
    .required()
    .default(defaultValue.title),
  status: mixed<CatalogStatus>()
    .oneOf([STATUS_ALIVE, STATUS_DISABLED, STATUS_ARCHIVED])
    .default(defaultValue.status),
}).required();

export const availableStatus: { label: string; value: CatalogStatus }[] = [
  { label: "Alive", value: STATUS_ALIVE },
  { label: "Disabled", value: STATUS_DISABLED },
  { label: "Archived", value: STATUS_ARCHIVED },
];
