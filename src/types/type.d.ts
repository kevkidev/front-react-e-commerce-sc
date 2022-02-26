// Page page and nested view
// export namespace PageTypes {
//   export const PAGE_HOME = "HomePage";
//   export const PAGE_MESSAGE = "MessagePage";
//   export const PAGE_SELL = "SellPage";
//   export const PAGE_ACCOUNT = "AccountPage";
//   export type PageType =
//     | typeof PAGE_HOME
//     | typeof PAGE_MESSAGE
//     | typeof PAGE_SELL
//     | typeof PAGE_ACCOUNT;
// }

// Sell view and nested view
// export namespace SellViewTypes {
//   export const SELL_VIEW_CATALOGS = "CatalogsView";
//   export const SELL_VIEW_OFFERS = "OffersView";
//   export const SELL_VIEW_ORDERS = "OrdersView";
//   export const SELL_VIEW_PRODUCTS = "ProductsView";
//   export type SellViewType =
//     | typeof SELL_VIEW_CATALOGS
//     | typeof SELL_VIEW_OFFERS
//     | typeof SELL_VIEW_ORDERS
//     | typeof SELL_VIEW_PRODUCTS;
// }

// Account page and nested view
// export namespace AccountViewTypes {
//   export const ACCOUNT_VIEW_PROFILE = "ProfileView";
//   export const ACCOUNT_VIEW_SECURITY = "SecurityView";
//   export const ACCOUNT_VIEW_SETTINGS = "SettingsView";
//   export type AccountViewType =
//     | typeof ACCOUNT_VIEW_PROFILE
//     | typeof ACCOUNT_VIEW_SECURITY
//     | typeof ACCOUNT_VIEW_SETTINGS;
// }
// Routes
export namespace Routing {
  export namespace RoutesNames {
    export const MESSAGES = `messages/`;
    export const SELL = `sell/`;
    export const CATALOGS = `catalogs/`;
    export const PRODUCTS = `products/`;
    export const OFFERS = `offers/`;
    export const ORDERS = `orders/`;
    export const ACCOUNT = `account/`;
    export const PROFILE = `profile/`;
    export const SECURITY = `security/`;
    export const SETTINGS = `settings/`;
    export const ANY = `*`;
  }
  export type RouteName =
    | typeof RoutesNames.MESSAGES
    | typeof RoutesNames.SELL
    | typeof RoutesNames.CATALOGS
    | typeof RoutesNames.PRODUCTS
    | typeof RoutesNames.OFFERS
    | typeof RoutesNames.ORDERS
    | typeof RoutesNames.ACCOUNT
    | typeof RoutesNames.PROFILE
    | typeof RoutesNames.SECURITY
    | typeof RoutesNames.SETTINGS
    | typeof RoutesNames.ANY;

  export type Route = {
    path: RouteName;
    element?: React.ReactNode;
    children?: NestedRoute;
  };
  export type NestedRoute = Route;

  //   export type RoutePath = {
  //     element: RouteName;
  //   } & NestedRoute;

  //   export type RouteNode = {
  //     element: React.ReactNode;
  //   } & NestedRoute;
}
