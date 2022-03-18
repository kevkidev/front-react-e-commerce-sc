import { IMenuItem } from "types/types";
import { RoutePath } from "./RoutePath";

export namespace MenuConfig {
  export const AccountMenuItems: IMenuItem[] = [
    {
      path: RoutePath.accountProfile,
      title: "Profiles",
    },
    {
      path: RoutePath.accountSecurity,
      title: "Security",
    },
    {
      path: RoutePath.accountSettings,
      title: "Settings",
    },
  ];

  export const AccountMenuOthersItems: IMenuItem[] = [
    {
      path: RoutePath.auth,
      title: "Log Out",
    },
  ];

  export const SellMenuItems: IMenuItem[] = [
    {
      path: RoutePath.sellCatalogs,
      title: "Catalogs",
    },
    {
      path: RoutePath.sellOffers,
      title: "Offers",
    },
    {
      path: RoutePath.sellOrders,
      title: "Orders",
    },
  ];
}
