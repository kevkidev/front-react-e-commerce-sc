/**
 * Needed to avoid circular dependencies between App and others elements (Pages)
 * Use this interfaces to configure the root path and link page elements or containers to a route branch
 */
import React from "react";
import { Routing } from "types/type";

export namespace RouteTemplate {
  export interface Messages {
    path: Routing.RouteName;
    element?: React.ReactNode;
  }

  export interface Sell {
    path: Routing.RouteName;
    element?: React.ReactNode;
    children: {
      catalogs: {
        path: Routing.RouteName;
        element?: React.ReactNode;
      };
      products: {
        path: Routing.RouteName;
        element?: React.ReactNode;
      };
      offers: {
        path: Routing.RouteName;
        element?: React.ReactNode;
      };
      orders: {
        path: Routing.RouteName;
        element?: React.ReactNode;
      };
    };
  }

  export interface Account {
    path: Routing.RouteName;
    element?: React.ReactNode;
    children: {
      profile: {
        path: Routing.RouteName;
        element?: React.ReactNode;
      };
      security: {
        path: Routing.RouteName;
        element?: React.ReactNode;
      };
      settings: {
        path: Routing.RouteName;
        element?: React.ReactNode;
      };
    };
  }

  export interface Home {
    path: string;
    element?: React.ReactNode;
    children: {
      messages: Messages;
      sell: Sell;
      account: Account;
      any: {
        path: Routing.RouteName;
        element?: React.ReactNode;
      };
    };
  }

  export interface Root {
    home: Home;
  }
}
