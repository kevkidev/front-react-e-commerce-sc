import { Router } from "containers/Router";
import React from "react";

export namespace Page {
  export interface Props {
    menu: React.ReactNode;
    children: JSX.Element;
  }

  export function Component({ menu, children }: Props) {
    return (
      <>
        <Router menu={menu}>{children}</Router>
      </>
    );
  }
}
