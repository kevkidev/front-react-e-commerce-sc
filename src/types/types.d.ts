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
