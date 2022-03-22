import App from "components/containers/App";
import AccountPage from "components/pages/AccountPage";
import AuthPage from "components/pages/AuthPage";
import { HomePage } from "components/pages/HomePage";
import { MessagesPage } from "components/pages/MessagesPage";
import NotFoundPage from "components/pages/NotFoundPage";
import SellPage from "components/pages/SellPage";
import { CatalogsView } from "components/views/CatalogsView";
import { CatalogView } from "components/views/CatalogView";
import ProductView from "components/views/ProductView";
import { ProfileView } from "components/views/ProfileView";
import { RoutePath } from "main/RoutePath";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CloudService } from "services/cloud/CloudService";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

CloudService.getService().initialize();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.root} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={RoutePath.messages} element={<MessagesPage />} />
          <Route element={<SellPage />}>
            <Route path={RoutePath.sellCatalogs} element={<CatalogsView />} />
            <Route path={RoutePath.sellCatalog} element={<CatalogView />} />
            <Route path={RoutePath.sellOffers} element={<>Offers</>} />
            <Route path={RoutePath.sellOrders} element={<>Orders</>} />
            <Route path={RoutePath.sellProduct} element={<ProductView />} />
          </Route>
          <Route path={RoutePath.auth} element={<AuthPage />} />
          <Route element={<AccountPage />}>
            <Route path={RoutePath.accountProfile} element={<ProfileView />} />
            <Route path={RoutePath.accountSecurity} element={<>Security</>} />
            <Route path={RoutePath.accountSettings} element={<>Settings</>} />
          </Route>
          <Route path={RoutePath.any} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
