import { NavDropdown } from "react-bootstrap";

type Props = {
  title: string;
  items: { path: string; title: string }[];
  othersItems?: React.ReactNode;
};

export function DropdownMenu({ title, items, othersItems }: Props) {
  return (
    <NavDropdown title={title} id="collasible-nav-dropdown">
      {items.map((item, index) => (
        <NavDropdown.Item key={index + Date.now().toString()} href={item.path}>
          {item.title}
        </NavDropdown.Item>
      ))}
      {othersItems && <NavDropdown.Divider />}
      {othersItems && othersItems}
    </NavDropdown>
  );
}
