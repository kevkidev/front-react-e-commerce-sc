import { DTO } from "types/dto";
import {
  ProductStatus,
  STATUS_ALIVE,
  STATUS_ARCHIVED,
  STATUS_DISABLED,
} from "types/types.d";
import { mixed, number, object, SchemaOf, string } from "yup";

export const IMAGE_ID = "product-image";
export const PRODUCT_ID = "product-name";
export const CATEGORY_ID = "product-category";
export const PRODUCT_QUANTITY = "product-quantity";
export const PRODUCT_DESCRIPTION = "product-description";
export const MAX_PRODUCT_QUANTITY = 9999999;
export const MIN_PRODUCT_QUANTITY = 1;
export const MAX_PRODUCT_DESCRIPTION = 200;

export const defaultValue: DTO.Product = {
  uid: "",
  name: "",
  categoryUid: "none",
  imageUrl: "",
  ownerUid: "",
  quantity: 1,
  description: "",
  status: STATUS_ALIVE,
  catalogUid: "",
};

export function buildSchema(value: DTO.Product): SchemaOf<DTO.Product> {
  return object({
    uid: string().default(value.uid),
    catalogUid: string().default(value.catalogUid),
    name: string()
      .trim()
      .matches(/^[\w\W]{3,200}$/, "Please enter a name of 3 to 200 characters.")
      .required()
      .default(value.name),
    categoryUid: string()
      .uuid("Please select a category.")
      .default(value.categoryUid),
    imageUrl: string()
      .required("Please enter an image URL.")
      .default(value.imageUrl),
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
      .default(value.quantity),
    ownerUid: string().default(value.ownerUid),
    description: string()
      .trim()
      .max(
        MAX_PRODUCT_DESCRIPTION,
        `Maximum ${MAX_PRODUCT_DESCRIPTION} characters`
      )
      .required("Please enter a description.")
      .default(value.description),
    status: mixed<ProductStatus>()
      .oneOf([STATUS_ALIVE, STATUS_DISABLED, STATUS_ARCHIVED])
      .default(value.status),
  }).required();
}

export const availableStatus: { label: string; value: ProductStatus }[] = [
  { label: "Alive", value: STATUS_ALIVE },
  { label: "Disabled", value: STATUS_DISABLED },
  { label: "Archived", value: STATUS_ARCHIVED },
];
