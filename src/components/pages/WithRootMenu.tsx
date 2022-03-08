import { RootMenu } from "components/Menu/RootMenu";
import { RoutePath } from "main/RoutePath";
import React from "react";
import { Page } from "./Page";

export default function WithRootMenu(PageContent: React.FC) {
  return function WithRootMenu() {
    const menu = <RootMenu routePath={RoutePath.Root} />;
    return (
      <Page.Component menu={menu}>
        <PageContent />
      </Page.Component>
    );
  };
}
