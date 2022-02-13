import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AuthPage from "./AuthPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ResetPasswordPage from "./ResetPasswordPage";

ReactDOM.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      redirectUri={
        window.location.origin + "/" + process.env.REACT_APP_APP_NAME
      }
      >
      <App />
    </Auth0Provider> */}

    <BrowserRouter>
      <Routes>
        <Route path={"/front-react-social-network/"} element={<App />}>
          <Route index element={<AuthPage />} />
          <Route path="login" element={<AuthPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
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
