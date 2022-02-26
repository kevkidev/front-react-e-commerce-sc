/* eslint-disable @typescript-eslint/no-unused-vars */

export interface Page1 {
  name: string;
}

type PageLabel = "A" | "B";
type Strategy = (value: Page1) => Page1;

export interface PageType {
  label: PageLabel;
  create: Strategy;
}

// export class APage extends Page {
//   name: string;
// }

// function usePageType(
//   label: string,
//   creator: (value: Page) => Page
// ): PageType {
//   return {
//     label,
//     create: creator,
//   };
// }

// Factory

export const PageFactory = (
  types: PageType[]
): { create: (label: string, page: Page1) => Page1 } => {
  return {
    create: (label: string, page: Page1): Page1 => {
      const type = types.find((type) => type.label === label);
      if (!type) throw Error("Cannot create Page of undefined");
      return () => type.create(page);
    },
  };
};

// const pageConfig = require('')
// PageFactory(PageConfig).create();
// PageFactory([PageTypeA, PageTypeB]).;
// --------- Creer des instance de type de page------------------

// const pageAType = usePageType("A", (data): APage => {
//   data;
// });

// const PageAComponent = withPageA(Page);

// ----------------------------------------- Components
