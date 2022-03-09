import { Nav } from "react-bootstrap";
import { IMenuItem } from "types/types.d";

type Props = {
  items: IMenuItem[];
};

export function SubMenu({ items }: Props) {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      {items.map(({ path, title }, index) => (
        <Nav.Item key={index + Date.now().toString()}>
          <Nav.Link href={path}>{title}</Nav.Link>
        </Nav.Item>
      ))}

      {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
    </Nav>
  );
}
