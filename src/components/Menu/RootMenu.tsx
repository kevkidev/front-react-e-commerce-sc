import { MenuConfig } from "main/MenuConfig";
import { Container, Nav, Navbar } from "react-bootstrap";
import { IRoutePath } from "types/types.d";
import { DropdownMenu } from "./DropdownMenu";

type Props = {
  routePath: IRoutePath;
};

export function RootMenu({ routePath }: Props) {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={routePath.root}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={routePath.messages}>Messages</Nav.Link>
              <DropdownMenu title={"Sell"} items={MenuConfig.SellMenuItems} />
            </Nav>
            <Nav>
              <DropdownMenu
                title={"Account"}
                items={MenuConfig.AccountMenuItems}
                othersItems={MenuConfig.AccountMenuOthersItems}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
