// import Friends from "./Friends";
// import { Auth } from "@/components/AuthContainer";

import { Auth } from "components/AuthContainer";
import { Model } from "interfaces/models";
import React, { useContext, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { RoutesPath } from "routes";
import { Firebase } from "services/Firebase";
import LocalData from "services/LocalData";
import { products } from "services/products.json";

function App() {
  // clear local data
  useEffect(() => {
    LocalData.clearAll();
    products.forEach((p: Model.Product) => {
      Firebase.Database.createProduct(p);
    });
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

  const logged = useContext(Auth.IsLoggedContext).logged;

  return (
    <Auth.Container>
      <div className="app">
        <nav>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href={RoutesPath.ROOT}>Demo</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#pricing">Articles</Nav.Link>
                  <Nav.Link href="#pricing"></Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  {/* <Nav.Link href="#"> */}
                  {logged ? (
                    <span
                      onClick={() => {
                        alert("logout");
                      }}
                    >
                      Sign Out
                    </span>
                  ) : (
                    <Link to={RoutesPath.LOGIN}>Sign In</Link>
                  )}
                  {/* </Nav.Link> */}
                  <Nav.Link eventKey={2} href="#">
                    #{LocalData.getUser() && <Link to="account">Account</Link>}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
        <Outlet />

        <hr />
        {/* <Friends /> */}
      </div>
    </Auth.Container>
  );
}

export default App;
