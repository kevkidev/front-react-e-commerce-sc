import { SubMenu } from "components/Menu/SubMenu";
import { Page } from "components/pages/Page";
import { MenuConfig } from "main/MenuConfig";

export default function SellPage() {
  const menu = <SubMenu items={MenuConfig.SellMenuItems} />;
  return <Page menu={menu}></Page>;
}
