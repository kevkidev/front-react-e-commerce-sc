import { useRoutes } from "react-router-dom";
import { Router } from "./Router";

export default function App() {
  const routes = useRoutes(Router.get());
  return <div>{routes}</div>;
}

// <BrowserRouter>
{
  /* {routes} */
}
{
  /* //   <Routes>
  //     <Route path={RoutesTree.HOME} element={<HomePage />}>
  //       <Route path={RoutesTree.LOGIN} element={<AuthPage />} />
  //       <Route path={RoutesTree.ACCOUNT} element={<AccountPage />} />
  //       <Route
  //         path={RoutesTree.RESET_PASSWORD}
  //         element={<ResetPasswordPage />}
  //       />
  //       <Route path="*" element={<NotFoundPage />} />
  //     </Route>
  //   </Routes> */
}
// </BrowserRouter>

// import { Auth } from "components/AuthContainer";
// import { MainMenu } from "components/MainMenu";
// import { Model } from "interfaces/models";
// import React, { useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import { Firebase } from "services/Firebase";
// import LocalData from "services/LocalData";
// import { products } from "services/products.json";

// export default function App() {
//   // clear local data
//   useEffect(() => {
//     LocalData.clearAll();
//     products.forEach((p: Model.Product) => {
//       Firebase.Database.createProduct(p);
//     });
//   }, []);

//   return (
//     <Auth.Container>
//       <div className="app">
//         <MainMenu />
//         <Outlet />
//         <hr />
//       </div>
//     </Auth.Container>
//   );
// }

// const pageFactory = PageFactory(PageTypes);
// pageFactory.create();

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

//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, []);

// login
// useEffect(() => {

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

// à passer en back
// const categories = [
//   "categories",
//   "informatique et high tech",
//   "maison & cuisine",
//   "livres",
//   "bricolage",
//   "jouets & jeux",
//   "sport loisir",
//   "mode accesoires",
//   "beauté bien etre",
//   "bebe",
//   "jardin",
//   "jeux video",
//   "animalerie",
//   "divers",
// ];

// const APage = (): APpage => {
//   return;
// };
// const AppContext = React.createContext({});

// const logged = useContext(Auth.IsLoggedContext).logged;

// creation des instances
// c'e
