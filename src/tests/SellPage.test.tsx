import { render, screen } from "@testing-library/react";
import { SubMenu } from "components/menus/SubMenu";
import { MenuConfig } from "main/MenuConfig";

test("sell sub menu", () => {
  render(
    <div id="testSubMenu">
      <SubMenu items={MenuConfig.SellMenuItems} />
    </div>
  );
  const menu = document.querySelector("#testSubMenu");
  expect(screen.getByText("Catalogs")).toBeInTheDocument();
  expect(menu).not.toBeNull();
});
