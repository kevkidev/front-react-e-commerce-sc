/**
 * This file allows to link a component with a route branch and define the root path
 */
import { RoutePath } from "main/RoutePath";
import React from "react";
import { RouteObject } from "react-router-dom";
import { RouteTemplate } from "types/RouteTemplate";

const HomePage = React.lazy(() => import("components/pages/HomePage"));
const MessagesPage = React.lazy(() => import("components/pages/MessagesPage"));
// const SellPage =  React.lazy(() => import("components/pages/SellPage"));
const AccountPage = React.lazy(() => import("components/pages/AccountPage"));
const NotFoundPage = React.lazy(() => import("components/pages/NotFoundPage"));

const defaultConfig: RouteTemplate.All = {
  root: {
    path: RoutePath.Root.path,
    // element: <>{/* <RootMenu routePath={RoutePath.Root} /> <Outlet /> */}</>,
    children: {
      home: {
        path: RoutePath.Home.path,
        element: <HomePage />,
        index: true,
      },
      messages: {
        path: RoutePath.Messages.path,
        element: <MessagesPage />,
      },
      sell: {
        path: RoutePath.Sell.path,
        element: <></>,
        children: {
          catalogs: {
            path: RoutePath.Sell.children.catalogs.path,
            element: <></>,
          },
          products: {
            path: RoutePath.Sell.children.products.path,
            element: <></>,
          },
          offers: {
            path: RoutePath.Sell.children.offers.path,
            element: <></>,
          },
          orders: {
            path: RoutePath.Sell.children.orders.path,
            element: <></>,
          },
        },
      },
      account: {
        path: RoutePath.Account.path,
        element: <AccountPage />,
        children: {
          profile: {
            path: RoutePath.Account.children.profile.path,
            element: <></>,
          },
          security: {
            path: RoutePath.Account.children.security.path,
            element: <></>,
          },
          settings: {
            path: RoutePath.Account.children.settings.path,
            element: <></>,
          },
        },
      },
      any: {
        path: RoutePath.Root.children.any.path,
        element: <NotFoundPage />,
      },
    },
  },
};

export function buildRoutes(root: object): RouteObject[] {
  const routes: RouteObject[] = Object.values(root).map((value) => {
    console.log(value);
    return {
      path: value.path,
      element: value.element,
      children: value.children ? buildRoutes(value.children) : [],
      index: value.index,
    };
  });
  console.log(routes);
  return routes;
}

export namespace RoutesConfig {
  export const getDefaultRoutes = () => buildRoutes(defaultConfig);
}
