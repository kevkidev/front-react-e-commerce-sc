import { AuthHook } from "components/hooks/AuthHook";
import { MenuConfig } from "main/MenuConfig";
import { RoutePath } from "main/RoutePath";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthService } from "services/AuthService";
import { IRoutePath } from "types/types.d";
import { DropdownMenu } from "./DropdownMenu";
type Props = {
  routePath: IRoutePath;
};

export function RootMenu({ routePath }: Props) {
  const navigate = useNavigate();
  const logged = AuthHook.useLoggedEffect();

  const handleLoggout = () =>
    AuthService.logout(() => navigate(RoutePath.auth));

  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={routePath.root}>ReCom</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {logged && (
                <Nav.Link href={routePath.messages}>Messages</Nav.Link>
              )}
              {logged && (
                <DropdownMenu title={"Sell"} items={MenuConfig.SellMenuItems} />
              )}
            </Nav>
            <Nav>
              {logged && (
                <DropdownMenu
                  title={"Account"}
                  items={MenuConfig.AccountMenuItems}
                />
              )}
              {logged && <Nav.Link onClick={handleLoggout}>Log Out</Nav.Link>}
              {!logged && (
                <Nav.Link href={routePath.auth}>Log In / Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
