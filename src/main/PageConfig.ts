import { Page1, PageType } from "core/PageFactory";

export const PageTypes: PageType[] = [
  { label: "A", create: (value: Page1) => value },
  { label: "B", create: (value: Page1) => value },
];
