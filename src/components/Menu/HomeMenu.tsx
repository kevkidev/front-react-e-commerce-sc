import { Routes } from "main/Routes";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export function HomeMenu() {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={""}>
            <Link to={Routes.tree.home.root}>Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={Routes.tree.home.root}>
                <Link to={Routes.tree.messages.root}>Messages</Link>
              </Nav.Link>
              <NavDropdown title="Sell" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link to={Routes.tree.sell.branch.catalogs}>Catalogs</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link to={Routes.tree.sell.branch.products}>Products</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to={Routes.tree.sell.branch.offers}>Offers</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to={Routes.tree.sell.branch.orders}>Orders</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="<user-name>" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link to={Routes.tree.account.branch.profile}>Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link to={Routes.tree.account.branch.settings}>Settings</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to={Routes.tree.account.branch.security}>Security</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
