import { RouteTemplate } from "types/RouteTemplate";
import { Routing } from "types/type.d";

export namespace RoutePath {
  export const Messages = {
    path: Routing.RoutesNames.MESSAGES as Routing.RouteName,
  };

  export const Sell = {
    path: Routing.RoutesNames.SELL as Routing.RouteName,
    children: {
      catalogs: {
        path: Routing.RoutesNames.CATALOGS as Routing.RouteName,
      },
      products: {
        path: Routing.RoutesNames.PRODUCTS as Routing.RouteName,
      },
      offers: {
        path: Routing.RoutesNames.OFFERS as Routing.RouteName,
      },
      orders: {
        path: Routing.RoutesNames.ORDERS as Routing.RouteName,
      },
    },
  };

  export const Account = {
    path: Routing.RoutesNames.ACCOUNT as Routing.RouteName,
    children: {
      profile: {
        path: Routing.RoutesNames.PROFILE as Routing.RouteName,
      },
      security: {
        path: Routing.RoutesNames.SECURITY as Routing.RouteName,
      },
      settings: {
        path: Routing.RoutesNames.SETTINGS as Routing.RouteName,
      },
    },
  };

  export const Home = {
    path: `/${process.env.REACT_APP_APP_NAME}/`,
    children: {
      messages: Messages,
      sell: Sell,
      account: Account,
      any: {
        path: Routing.RoutesNames.ANY as Routing.RouteName,
      },
    },
  };

  export const Root: RouteTemplate.Root = { home: Home };
}
