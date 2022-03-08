export interface IRoutePath {
  root: string;
  messages: string;
  sell: string;
  sellCatalogs: string;
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
