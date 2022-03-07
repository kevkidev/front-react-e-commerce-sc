import { HomeMenu } from "components/Menu/HomeMenu";
import { Page } from "components/Page";
import { RouteTemplate } from "types/RouteTemplate";

type Props = {
  routePath: RouteTemplate.Home;
};
export default function HomePage({ routePath }: Props) {
  return (
    <Page.Component menu={<HomeMenu routePath={routePath} />}>
      <h1>Home</h1>
      <p>This is the home page</p>
    </Page.Component>
  );
}
