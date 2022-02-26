import { DropdownMenu } from "components/Menu/DropdownMenu/DropdownMenu";
import { RouteTemplate } from "types/RouteTemplate";

type Props = {
  routePath: RouteTemplate.Sell;
};

export function SellDropdownMenu({ routePath }: Props) {
  return (
    <DropdownMenu
      title={"Sell"}
      items={[
        {
          path: routePath.children.catalogs.path,
          title: "Catalogs",
        },
        {
          path: routePath.children.products.path,
          title: "Products",
        },
        {
          path: routePath.children.offers.path,
          title: "Offers",
        },
        {
          path: routePath.children.orders.path,
          title: "Orders",
        },
      ]}
    />
  );
}
