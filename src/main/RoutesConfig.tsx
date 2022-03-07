/**
 * This file allows to link a component with a route branch and define the root path
 */
import { RoutePath } from "main/RoutePath";
import React from "react";
import { RouteTemplate } from "types/RouteTemplate";

export namespace RoutesConfig {
  const HomePage = React.lazy(() => import("components/pages/HomePage"));
  // const MessagesPage = React.lazy(() => import("components/pages/MessagesPage"));
  // const SellPage =  React.lazy(() => import("components/pages/SellPage"));
  const AccountPage = React.lazy(() => import("components/pages/AccountPage"));
  const NotFoundPage = React.lazy(
    () => import("components/pages/NotFoundPage")
  );

  export const defaultConfig: RouteTemplate.Root = {
    home: {
      path: RoutePath.Root.home.path,
      element: <HomePage routePath={RoutePath.Root.home} />,
      children: {
        messages: {
          path: RoutePath.Messages.path,
          element: <></>,
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
          path: RoutePath.Root.home.children.any.path,
          element: <NotFoundPage />,
        },
      },
    },
  };
}
