import { AuthHook } from "components/hooks/AuthHook";
import { SubMenu } from "components/menus/SubMenu";
import { Page } from "components/pages/Page";
import { MenuConfig } from "main/MenuConfig";

export default function AccountPage() {
  const logged = AuthHook.useLoggedEffect(true);

  const menu = <SubMenu items={MenuConfig.AccountMenuItems} />;

  return <> {logged && <Page menu={menu}></Page>}</>;
}
