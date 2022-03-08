import React from "react";
import { Outlet } from "react-router-dom";

export namespace Page {
  export interface Props {
    menu?: React.ReactNode;
    children: React.ReactNode;
  }

  export function Component({ menu, children }: Props) {
    return (
      <>
        {/* <Router menu={menu}>{children}</Router> */}
        {menu && menu}
        <Outlet />
        {children}
      </>
    );
  }
}
