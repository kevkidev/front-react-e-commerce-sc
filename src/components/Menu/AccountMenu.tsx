import { Nav } from "react-bootstrap";
import { RouteTemplate } from "types/RouteTemplate";

type Props = {
  routePath: RouteTemplate.Account;
};

export function AccountMenu({ routePath }: Props) {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href={routePath.path}>Account</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href={routePath.children.profile.path}>
          Profiles
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href={routePath.children.security.path}>
          Security
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href={routePath.children.settings.path}>
          Settings
        </Nav.Link>
      </Nav.Item>

      {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
    </Nav>
  );
}
