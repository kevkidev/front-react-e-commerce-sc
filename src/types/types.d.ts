export interface IRoutePath {
  root: string;
  auth: string;
  messages: string;
  sell: string;
  sellCatalogs: string;
  sellCatalog: string;
  sellProducts: string;
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

export type FormAction = "create" | "update";

export type CatalogStatus = "alive" | "disabled" | "archived";
