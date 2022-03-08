import { RootMenu } from "components/Menu/RootMenu";
import { Outlet } from "react-router-dom";
import { RoutePath } from "./RoutePath";

export default function App() {
  return (
    <>
      <RootMenu routePath={RoutePath} />
      <Outlet />
    </>
  );
}

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

// const AppContext = React.createContext({});
// const logged = useContext(Auth.IsLoggedContext).logged;
