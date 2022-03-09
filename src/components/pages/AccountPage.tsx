import { SubMenu } from "components/menus/SubMenu";
import { Page } from "components/pages/Page";
import { MenuConfig } from "main/MenuConfig";

export default function AccountPage() {
  const menu = <SubMenu items={MenuConfig.AccountMenuItems} />;
  return <Page menu={menu}></Page>;
}
