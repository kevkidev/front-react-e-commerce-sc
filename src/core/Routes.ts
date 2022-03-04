import { RouteTree } from "./RoutTree";

export namespace Routes {
  const ROOT = `/${process.env.REACT_APP_APP_NAME}/`;
  const MESSAGES = `messages/`;
  const SELL = `sell/`;
  const CATALOGS = `catalogs/`;
  const PRODUCTS = `products/`;
  const OFFERS = `offers/`;
  const ORDERS = `orders/`;
  const ACCOUNT = `account/`;
  const PROFILE = `profile/`;
  const SECURITY = `security/`;
  const SETTINGS = `settings/`;
  // const LOGIN = `login/`;

  // export // const INVOICES = `/invoices`;
  // export // const PASSWORD = `/password"`;

  // Routes
  // export namespace Static {
  // export const APP_HOME = ROOT;
  // export const APP_LOGIN = ROOT + LOGIN;
  // export const APP_ACCOUNT = ROOT + ACCOUNT;
  // export const APP_ACCOUNT_CATALOGS = `${ROOT}${ACCOUNT}${CATALOGS}`;
  // }

  export const tree: RouteTree = {
    home: { root: ROOT },
    messages: { root: MESSAGES },
    sell: {
      root: SELL,
      branch: {
        catalogs: CATALOGS,
        products: PRODUCTS,
        offers: OFFERS,
        orders: ORDERS,
      },
    },
    account: {
      root: ACCOUNT,
      branch: {
        profile: PROFILE,
        security: SECURITY,
        settings: SETTINGS,
      },
    },
  };

  // interface Tree {
  //   home: { root: Root };
  //   messages: { root: typeof MESSAGES };
  //   sell: {
  //     root: typeof SELL;
  //     branch: {
  //       catalogs: typeof CATALOGS;
  //       products: typeof PRODUCTS;
  //       offers: typeof OFFERS;
  //       orders: typeof ORDERS;
  //     };
  //   };
  //   account: {
  //     root: typeof ACCOUNT;
  //     branch: {
  //       profile: typeof PROFILE;
  //       security: typeof SECURITY;
  //       settings: typeof SETTINGS;
  //     };
  //   };
  // }

  // type RouteWithChildren = Route & {
  //   children?: Route[] & { children?: Route[] };
  // };

  // export function getRoutes(tree: ITree) {

  // }
}
