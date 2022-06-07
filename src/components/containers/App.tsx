import ErrorBoundary from "components/errors/ErrorBoundary";
import { RootMenu } from "components/menus/RootMenu";
import { RoutePath } from "main/RoutePath";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <ErrorBoundary>
      <RootMenu routePath={RoutePath} />
      <Outlet />
    </ErrorBoundary>
  );
}
