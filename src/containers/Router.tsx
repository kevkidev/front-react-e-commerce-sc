import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  menu: React.ReactNode;
  children: React.ReactNode;
}

export function Router({ menu, children }: Props) {
  return (
    <>
      {menu}
      <Outlet />
      {children}
    </>
  );
}
