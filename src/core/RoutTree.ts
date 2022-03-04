export interface RouteTree {
  home: { root: string };
  messages: { root: string };
  sell: {
    root: string;
    branch: {
      catalogs: string;
      products: string;
      offers: string;
      orders: string;
    };
  };
  account: {
    root: string;
    branch: {
      profile: string;
      security: string;
      settings: string;
    };
  };
}
