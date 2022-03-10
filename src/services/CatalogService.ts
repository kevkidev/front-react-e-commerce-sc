import { DTO } from "types/dto";

export namespace CatalogService {
  /**
   * @param accountUid
   * @param pageSize the number of elements to get (default: 10)
   * @param nbGot the number of element already got
   * @returns the next 10 catalogs of the list (default: 10)
   */
  export function findNextCatalogs(
    accountUid: string,
    pageSize: number = 10,
    nbGot: number = 10
  ): DTO.Catalog[] {
    // @TODO
    pageSize;
    nbGot;
    return [
      {
        uid: "uidzero-ziodoeo",
        title: "Cata 1: oeprokpze op + er",
        ownerUid: accountUid,
        productsUids: ["1", "2"],
        imageUrl:
          "https://images.pexels.com/photos/6568687/pexels-photo-6568687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "alive",
      },
      {
        uid: "zeiroi-ioior",
        title: "Cata 2 zeok pozekpr",
        ownerUid: accountUid,
        productsUids: ["3", "4"],
        imageUrl:
          "https://images.pexels.com/photos/6568687/pexels-photo-6568687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "alive",
      },
    ];
  }

  export function findCatalog(catalogUid: string): DTO.Catalog {
    // @TODO
    return {
      uid: catalogUid,
      title: "ZE e,op opo",
      ownerUid: currentAccount.uid,
      productsUids: ["1", "2"],
      imageUrl:
        "https://images.pexels.com/photos/6568687/pexels-photo-6568687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      status: "alive",
    };
  }

  export function findNextProducts(
    catalogUid: string,
    pageSize: number = 10
  ): DTO.Product[] {
    pageSize;
    return [
      {
        uid: "1",
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        quantity: 109,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        categoryUid: "7-azeeert",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        //   rating: { rate: 3.9, count: 120 },
        ownerUid: currentAccount.uid,
      },
      {
        uid: "2",
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        quantity: 223,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        categoryUid: "7-azeeert",
        imageUrl:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        //   rating: { rate: 4.1, count: 259 },
        ownerUid: currentAccount.uid,
      },
    ];
  }
}

export const currentAccount = {
  uid: "1-eiezuirui", // get from firebase
  email: "azeaze@azeaze", // get from firebase
  invoiceAddress: {
    uid: "",
    city: "",
    street: "",
    zipCode: 0,
    firstName: "", // consolidate
    lastName: "", // consolidate
    phone: "", //consolidate};
  },
  deliveryAddress: {
    uid: "",
    city: "",
    street: "",
    zipCode: 0,
    firstName: "", // consolidate
    lastName: "", // consolidate
    phone: "", //consolidate};
  },
};
