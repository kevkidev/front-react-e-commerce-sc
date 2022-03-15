import { IRoutePath } from "types/types";

const ROOT = `/${process.env.REACT_APP_APP_NAME}/`;
const AUTH = `${ROOT}auth/`;
const MESSAGES = `${ROOT}messages/`;
const SELL = `sell/`;
const SELL_CATALOGS = `${ROOT}${SELL}catalogs/`;
const SELL_CATALOG = `${ROOT}${SELL}catalogs/:uid`;
const SELL_PRODUCTS = `${ROOT}${SELL}products/`;
const SELL_PRODUCT = `${ROOT}${SELL}products/:uid`;
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
  auth: AUTH,
  sell: SELL,
  sellCatalogs: SELL_CATALOGS,
  sellCatalog: SELL_CATALOG,
  sellProducts: SELL_PRODUCTS,
  sellProduct: SELL_PRODUCT,
  sellOffers: SELL_OFFERS,
  sellOrders: SELL_ORDERS,
  account: ACCOUNT,
  accountProfile: ACCOUNT_PROFILE,
  accountSecurity: ACCOUNT_SECURITY,
  accountSettings: ACCOUNT_SETTINGS,
  any: ANY,
};
