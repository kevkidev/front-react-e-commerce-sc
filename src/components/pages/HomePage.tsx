import { HomeMenu } from "components/Menu/HomeMenu";
import { Page } from "components/Page";

export function HomePage() {
  return (
    <Page.Component menu={<HomeMenu />}>
      <h1>Home</h1>
      <p>This is the home page</p>
    </Page.Component>
  );
}
