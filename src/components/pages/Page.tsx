import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

export interface Props {
  menu?: React.ReactNode;
  children?: React.ReactNode;
}

export function Page({ menu, children }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
      {menu}
      <Outlet />
    </Suspense>
  );
}
