import AccountPage from "components/pages/AccountPage";
import HomePage from "components/pages/HomePage";
import MessagesPage from "components/pages/MessagesPage";
import NotFoundPage from "components/pages/NotFoundPage";
import App from "main/App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Routing } from "types/type.d";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={Routing.RoutesNames.ROOT} element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path={Routing.RoutesNames.MESSAGES}
            element={<MessagesPage />}
          />
          <Route path={Routing.RoutesNames.SELL} element={<>Sell</>} />
          <Route path={Routing.RoutesNames.ACCOUNT} element={<AccountPage />} />
          <Route path={Routing.RoutesNames.ANY} element={<NotFoundPage />} />
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
