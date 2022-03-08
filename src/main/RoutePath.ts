import { IRoutePath } from "types/types";

const ROOT = `/${process.env.REACT_APP_APP_NAME}/`;
const MESSAGES = `${ROOT}messages/`;
const SELL = `sell/`;
const SELL_CATALOGS = `${ROOT}${SELL}catalogs/`;
const SELL_PRODUCTS = `${ROOT}${SELL}products/`;
const SELL_OFFERS = `${ROOT}${SELL}offers/`;
const SELL_ORDERS = `${ROOT}${SELL}orders/`;
const ACCOUNT = `account/`;
const ACCOUNT_PROFILE = `${ROOT}${ACCOUNT}profile/`;
const ACCOUNT_SECURITY = `${ROOT}${ACCOUNT}security/`;
const ACCOUNT_SETTINGS = `${ROOT}${ACCOUNT}settings/`;
const ANY = `*`;

export const RoutePath: IRoutePath = {
  root: ROOT,
  messages: MESSAGES,
  sell: SELL,
  sellCatalogs: SELL_CATALOGS,
  sellProducts: SELL_PRODUCTS,
  sellOffers: SELL_OFFERS,
  sellOrders: SELL_ORDERS,
  account: ACCOUNT,
  accountProfile: ACCOUNT_PROFILE,
  accountSecurity: ACCOUNT_SECURITY,
  accountSettings: ACCOUNT_SETTINGS,
  any: ANY,
};
