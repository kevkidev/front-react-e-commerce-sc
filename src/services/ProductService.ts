import { DTO } from "types/dto";

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
