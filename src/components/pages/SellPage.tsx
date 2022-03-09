import { SubMenu } from "components/menus/SubMenu";
import { Page } from "components/pages/Page";
import { MenuConfig } from "main/MenuConfig";

export default function SellPage() {
  const menu = <SubMenu items={MenuConfig.SellMenuItems} />;
  return <Page menu={menu} />;
}
