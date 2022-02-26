import { NavDropdown } from "react-bootstrap";
import { RouteTemplate } from "types/RouteTemplate";
import { DropdownMenu } from "./DropdownMenu";

type Props = {
  routePath: RouteTemplate.Account;
};
export const AccountDropdownMenu = ({ routePath }: Props) => {
  const separatedItems = (
    <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
  );
  return (
    <>
      <DropdownMenu
        title={"Account"}
        items={[
          {
            path: routePath.children.profile.path,
            title: "Profile",
          },
          {
            path: routePath.children.security.path,
            title: "Security",
          },
          {
            path: routePath.children.settings.path,
            title: "Settings",
          },
        ]}
        othersItems={separatedItems}
      />
    </>
  );
};
