import { NavDropdown } from "react-bootstrap";
import { IMenuItem } from "types/types";

type Props = {
  title: string;
  items: IMenuItem[];
  othersItems?: IMenuItem[];
};

export function DropdownMenu({ title, items, othersItems }: Props) {
  function renderItems(items: IMenuItem[]) {
    return items.map(({ path, title }, index) => (
      <NavDropdown.Item key={index + Date.now().toString()} href={path}>
        {title}
      </NavDropdown.Item>
    ));
  }

  return (
    <NavDropdown title={title} id="collasible-nav-dropdown">
      {renderItems(items)}
      {othersItems && <NavDropdown.Divider />}
      {othersItems && renderItems(othersItems)}
    </NavDropdown>
  );
}
