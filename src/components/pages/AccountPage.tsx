import { AccountMenu } from "components/Menu/AccountMenu";
import { Page } from "components/Page";
import { RoutePath } from "main/RoutePath";
import { AccountView } from "views/AccountView";

export default function AccountPage() {
  return (
    <Page.Component menu={<AccountMenu routePath={RoutePath.Account} />}>
      <AccountView />
    </Page.Component>
  );
}
