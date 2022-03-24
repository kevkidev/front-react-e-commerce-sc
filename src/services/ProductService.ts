import { DTO } from "types/dto";
import { STATUS_ALIVE } from "types/types.d";

export namespace ProductService {
  export function findProducts() {
    return [];
  }

  export function findByUid(productUid: string): DTO.Product | undefined {
    // @TODO
    return {
      uid: productUid,
      name: "Mens Casual Slim Fit",
      quantity: 1599,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      categoryUid: "7d02d358-298b-43b5-b0c5-7ba29696e2b9",
      imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      //   rating: { rate: 2.1, count: 430 },
      ownerUid: currentAccount.uid,
      status: "alive",
    };
  }

  // @todo move it out
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
        categoryUid: "bae4545d-fb92-42c6-ace9-5df36ade0c2d",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        //   rating: { rate: 3.9, count: 120 },
        ownerUid: currentAccount.uid,
        status: STATUS_ALIVE,
      },
      {
        uid: "2",
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        quantity: 223,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        categoryUid: "7d02d358-298b-43b5-b0c5-7ba29696e2b9",
        imageUrl:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        //   rating: { rate: 4.1, count: 259 },
        ownerUid: currentAccount.uid,
        status: STATUS_ALIVE,
      },
    ];
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
}
