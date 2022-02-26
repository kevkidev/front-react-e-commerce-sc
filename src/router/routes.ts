export namespace RoutesPath {
  const ROOT = "/front-react-social-network";
  export const HOME = ROOT;
  export const LOGIN = ROOT + "/login";
  export const ACCOUNT = ROOT + "/account";
  export const RESET_PASSWORD = ROOT + "/reset-password";
  export const PRODUCT = ROOT + "/products/";

  export const ProtectedRoutes = {
    default: HOME,
    items: [ACCOUNT],
  };
}
