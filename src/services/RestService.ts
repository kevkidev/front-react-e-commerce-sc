import { Model } from "../models";
import { products } from "./products.json";

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
    export function loadList(handleProductUpdate: Function): void {
      handleProductUpdate && handleProductUpdate(getAll());
    }

    export function add(
      value: Model.Product,
      handleProductUpdate?: Function
    ): void {
      getAll().push(value);
      handleProductUpdate && handleProductUpdate(getAll());
    }

    export function update(
      value: Model.Product,
      handleProductUpdate?: Function
    ): void {
      let index = getAll().findIndex((p) => value.uid == p.uid);
      if (index > -1) {
        getAll().splice(index, 1, value);
      }
      handleProductUpdate && handleProductUpdate(getAll());
    }

    export function getAll(): Model.Product[] {
      // sort by name

      return products.sort((a, b) => {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
  }
}
