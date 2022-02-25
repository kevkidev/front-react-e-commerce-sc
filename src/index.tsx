import App from "containers/App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesPath } from "router/routes";
import ResetPasswordPage from "./components/ResetPasswordPage";
import AccountPage from "./containers/AccountPage";
import AuthPage from "./containers/AuthPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={RoutesPath.ROOT} element={<App />}>
          <Route index element={<AuthPage />} />
          <Route path={RoutesPath.LOGIN} element={<AuthPage />} />
          <Route path={RoutesPath.ACCOUNT} element={<AccountPage />} />
          <Route
            path={RoutesPath.RESET_PASSWORD}
            element={<ResetPasswordPage />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There&apos;s nothing here!</p>
              </main>
            }
          />
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
