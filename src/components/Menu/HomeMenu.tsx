import { SellDropdownMenu } from "components/Menu/DropdownMenu/SellDropdownMenu";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RouteTemplate } from "types/RouteTemplate";
import { AccountDropdownMenu } from "./DropdownMenu/AccountDropdownMenu";

type Props = {
  routePath: RouteTemplate.Home;
};

export function HomeMenu({ routePath }: Props) {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={""}>
            <Link to={routePath.path}>Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={routePath.children.messages.path}>
                Messages
              </Nav.Link>
              <SellDropdownMenu routePath={routePath.children.sell} />
            </Nav>
            <Nav>
              <AccountDropdownMenu routePath={routePath.children.account} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
