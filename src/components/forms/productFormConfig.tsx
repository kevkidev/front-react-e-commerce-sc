import { DTO } from "types/dto";
import {
  ProductStatus,
  STATUS_ALIVE,
  STATUS_ARCHIVED,
  STATUS_DISABLED,
} from "types/types.d";
import { v4 as uuidv4 } from "uuid";
import { mixed, number, object, SchemaOf, string } from "yup";

export const PRODUCT_ID = "product-name";
export const CATEGORY_ID = "product-category";
export const PRODUCT_QUANTITY = "product-quantity";
export const PRODUCT_DESCRIPTION = "product-description";
export const MAX_PRODUCT_QUANTITY = 9999999;
export const MIN_PRODUCT_QUANTITY = 1;
export const MAX_PRODUCT_DESCRIPTION = 200;

export const defaultValue: DTO.Product = {
  uid: uuidv4(),
  name: "",
  categoryUid: "none",
  imageUrl: "",
  ownerUid: "",
  quantity: 1,
  description: "",
  status: STATUS_ALIVE,
};

export const schema: SchemaOf<DTO.Product> = object({
  uid: string().default(defaultValue.uid),
  name: string()
    .trim()
    .matches(/^[\w\W]{3,200}$/, "Please enter a name of 3 to 200 characters.")
    .required()
    .default(defaultValue.name),
  categoryUid: string()
    .uuid("Please select a category.")
    .default(defaultValue.categoryUid),
  imageUrl: string().default(defaultValue.imageUrl),
  quantity: number()
    .integer("It must be an integer.")
    .min(
      MIN_PRODUCT_QUANTITY,
      `It must be at least ${MIN_PRODUCT_QUANTITY} product.`
    )
    .max(
      MAX_PRODUCT_QUANTITY,
      `The maximum quantity of product is : ${MAX_PRODUCT_QUANTITY}.`
    )
    .required("Please enter the quantity.")
    .default(defaultValue.quantity),
  ownerUid: string().default("ae23efa8-9b40-4604-a149-e9e9b5d464e0"),
  description: string()
    .trim()
    .max(
      MAX_PRODUCT_DESCRIPTION,
      `Maximum ${MAX_PRODUCT_DESCRIPTION} characters`
    )
    .required("Please enter a description.")
    .default(defaultValue.description),
  status: mixed<ProductStatus>()
    .oneOf([STATUS_ALIVE, STATUS_DISABLED, STATUS_ARCHIVED])
    .default(defaultValue.status),
}).required();

export const availableStatus: { label: string; value: ProductStatus }[] = [
  { label: "Alive", value: STATUS_ALIVE },
  { label: "Disabled", value: STATUS_DISABLED },
  { label: "Archived", value: STATUS_ARCHIVED },
];
