import { Model } from "interfaces/models";
import { products } from "services/products.json";

const MOCK_SERVICE_TIMEOUT = 3000;

export namespace RestService {
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

  export const categories: Model.Category[] = [
    { name: "Toys", uid: "1-azeeert" },
    { name: "Books", uid: "2-azeeert" },
    { name: "Home & Kitchen", uid: "3-azeeert" },
    { name: "women's clothing", uid: "4-azeeert" },
    { name: "jewelery", uid: "6-azeeert" },
    { name: "men's clothing", uid: "7-azeeert" },
    { name: "electronics", uid: "8-azeeert" },
  ];

  export function getCategory(uid: string): Model.Category | undefined {
    return categories.find((c) => c.uid == uid);
  }

  export namespace Product {
    export function add(value: Model.Product): void {
      setTimeout(() => {
        getAll().then((list) => list.push(value));
      }, MOCK_SERVICE_TIMEOUT);
    }

    export function update(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      value: Model.Product,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleProductUpdate?: Function
    ): void {
      setTimeout(() => {}, MOCK_SERVICE_TIMEOUT);
      // let index = getAll().findIndex((p) => value.uid == p.uid);
      // if (index > -1) {
      //   getAll().splice(index, 1, value);
      // }
    }

    export function getAll(): Promise<Model.Product[]> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, MOCK_SERVICE_TIMEOUT);
      });
    }
  }
}
