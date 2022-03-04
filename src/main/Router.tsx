import AccountPage from "components/pages/AccountPage";
import AuthPage from "components/pages/AuthPage";
import { HomePage } from "components/pages/HomePage";
import { NotFoundPage } from "components/pages/NotFoundPage";
import { Routes } from "main/Routes";
import React from "react";
import { RouteObject } from "react-router-dom";
const ANY = "*";

export namespace Router {
  const routes: RouteObject[] = [{}];

  function convertToRoutes  (tree: object) : RouteObject[] => {
    const entries = Object.entries(Routes.tree);
    for (const [name, path] of routes) {
      const branch = {path : entries[name]};
    }
  }

  export const get = (): RouteObject[] => [
    {
      path: Routes.tree.home.root,
      element: <HomePage />,
      children: [
        {
          path: "",
          element: <AuthPage />,
        },
        {
          path: Routes.ACCOUNT,
          element: <AccountPage />,
          children: [
            {
              path: Routes.PRODUCTS,
              element: <AuthPage />,
            },
          ],
        },
        {
          path: ANY,
          element: <NotFoundPage />,
        },
      ],
    },
  ];
}

// <Routes>
//         <Route path={RoutesTree.HOME} element={<HomePage />}>
//           <Route path={RoutesTree.LOGIN} element={<AuthPage />} />
//           <Route path={RoutesTree.ACCOUNT} element={<AccountPage />} />
//           <Route
//             path={RoutesTree.RESET_PASSWORD}
//             element={<ResetPasswordPage />}
//           />
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>
