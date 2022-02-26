import { Menu } from "components/Menu/Menu";
import { Page } from "components/Page";

export function HomePage() {
  const menu = <Menu></Menu>;
  return (
    <Page.Component menu={menu}>
      <h1>Home</h1>
    </Page.Component>
  );
}
