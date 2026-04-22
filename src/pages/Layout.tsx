import React, { type ReactNode } from "react";
import { Outlet } from "react-router-dom";

type Props = { children?: ReactNode };

function Layout({ children }: Props) {
  return (
    <div>
      navbar
      <div>{children ?? <Outlet />}</div>
    </div>
  );
}

export default Layout;
