import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.scss";
import LocalData from "./services/LocalData";
// import Friends from "./Friends";

function App() {
  // clear local data
  useEffect(() => {
    LocalData.clearAll();
  }, []);
  // get profiles list
  // useEffect(() => {
  //   fetch(process.env.REACT_APP_SERVER_DATA + "/profiles", {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Bearer " + _getCookieValueByName("accessToken"),
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // console.log(photos);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // login
  // useEffect(() => {
  //   console.log("login");
  //   fetch(process.env.REACT_APP_SERVER_AUTH + "/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: "kev",
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       document.cookie = `accessToken=${data.accessToken}`;
  //       document.cookie = `refreshToken=${data.refreshToken}`;
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // function _getCookieValueByName(cookieName: string): string | undefined {
  //   return document.cookie
  //     .split(";")
  //     .find((row) => row.trim().startsWith(cookieName))
  //     ?.trim()
  //     ?.split("=")[1];
  // }

  return (
    <div className="app">
      <nav>
        <Link to="login">Login</Link> | <Link to="logout">Logout</Link>{" "}
        {LocalData.getUser() && <Link to="account">Account</Link>}
      </nav>
      <Outlet />

      <hr />
      {/* <Friends /> */}
      <p>
        I used <a href="https://reqres.in/">https://reqres.in/</a>.
      </p>
    </div>
  );
}

export default App;
