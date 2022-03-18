export interface IRoutePath {
  root: string;
  auth: string;
  messages: string;
  sell: string;
  sellCatalogs: string;
  sellCatalog: string;
  sellProducts: string;
  sellProduct: string;
  sellOffers: string;
  sellOrders: string;
  account: string;
  accountProfile: string;
  accountSecurity: string;
  accountSettings: string;
  any: string;
}

export type IMenuItem = {
  path: string;
  title: string;
};

export const ACTION_CREATE = "create";
export const ACTION_UPDATE = "update";
export type FormAction = typeof ACTION_CREATE | typeof ACTION_UPDATE;

export const STATUS_ALIVE = "alive";
export const STATUS_DISABLED = "disabled";
export const STATUS_ARCHIVED = "archived";

export type CatalogStatus =
  | typeof STATUS_ALIVE
  | typeof STATUS_DISABLED
  | typeof STATUS_ARCHIVED;

export type ProductStatus = CatalogStatus;

export interface Auth {
  email: string;
  password: string;
  passwordConfirm?: string;
  signUp: boolean;
}

export const FORM_MESSAGE_LEVEL_DANGER = "danger";
export const FORM_MESSAGE_LEVEL_SUCCESS = "success";
export const FORM_MESSAGE_DISPLAY_BLOCK = "block";
export const FORM_MESSAGE_DISPLAY_NONE = "none";
type FormResponseLevel =
  | typeof FORM_MESSAGE_LEVEL_DANGER
  | typeof FORM_MESSAGE_LEVEL_SUCCESS;
type FormResponseDisplay =
  | typeof FORM_MESSAGE_DISPLAY_NONE
  | typeof FORM_MESSAGE_DISPLAY_BLOCK;

export type FormResponse = {
  message: string;
  level: FormResponseLevel;
  display: FormResponseDisplay;
};

export const HTTP_STATUS_CLASS_INFO = "info";
export const HTTP_STATUS_CLASS_SUCCESS = "success";
export const HTTP_STATUS_CLASS_REDIRECT = "redirection";
export const HTTP_STATUS_CLASS_ERROR_CLIENT = "error-client";
export const HTTP_STATUS_CLASS_ERROR_SERVER = "error-server";

export type HttpStatusCodeClass =
  | typeof HTTP_STATUS_CLASS_INFO
  | typeof HTTP_STATUS_CLASS_SUCCESS
  | typeof HTTP_STATUS_CLASS_REDIRECT
  | typeof HTTP_STATUS_CLASS_ERROR_CLIENT
  | typeof HTTP_STATUS_CLASS_ERROR_SERVER;

export interface JsonResponseSignUp {
  message: string;
  code: string;
}

export interface FetchResponse {
  json: Promise;
  status: number;
}
