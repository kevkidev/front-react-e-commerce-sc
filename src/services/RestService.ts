import { products } from "services/products.json";
import { Models } from "types/models.d";
import {
  HttpStatusCodeClass,
  HTTP_STATUS_CLASS_ERROR_CLIENT,
  HTTP_STATUS_CLASS_ERROR_SERVER,
  HTTP_STATUS_CLASS_INFO,
  HTTP_STATUS_CLASS_REDIRECT,
  HTTP_STATUS_CLASS_SUCCESS,
} from "types/types.d";

const MOCK_SERVICE_TIMEOUT = 3000;

export namespace RestService {
  export const currentAccount = {
    uid: "b04a042f-788b-4dea-9672-8c2a70c0a70f", // get from firebase
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

  export const categories: Models.Category[] = [
    { name: "Toys", uid: "71ff9656-ae27-4feb-a821-b1a4f8f7394f" },
    { name: "Books", uid: "26145f2e-d411-4bc8-9763-5a88fbb81473" },
    { name: "Home & Kitchen", uid: "5c675f5e-1f11-49a5-92c0-b813fc939946" },
    { name: "women's clothing", uid: "5f9a88fc-2d23-4677-a09c-b19f389fa38b" },
    { name: "jewelery", uid: "5c4fe9b4-721a-4ace-8614-5800ed3cba06" },
    { name: "men's clothing", uid: "7d02d358-298b-43b5-b0c5-7ba29696e2b9" },
    { name: "electronics", uid: "bae4545d-fb92-42c6-ace9-5df36ade0c2d" },
  ];

  export function getCategory(uid: string): Models.Category | undefined {
    return categories.find((c) => c.uid == uid);
  }

  export namespace Product {
    export function add(value: Models.Product): void {
      setTimeout(() => {
        getAll().then((list) => list.push(value));
      }, MOCK_SERVICE_TIMEOUT);
    }

    export function update(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      value: Models.Product,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleProductUpdate?: Function
    ): void {
      setTimeout(() => {}, MOCK_SERVICE_TIMEOUT);
      // let index = getAll().findIndex((p) => value.uid == p.uid);
      // if (index > -1) {
      //   getAll().splice(index, 1, value);
      // }
    }

    export function getAll(): Promise<Models.Product[]> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, MOCK_SERVICE_TIMEOUT);
      });
    }
  }

  export function getStatusClass(
    statusCode: number
  ): HttpStatusCodeClass | undefined {
    // Informational responses (100–199)
    if (statusCode >= 100 && statusCode < 200) return HTTP_STATUS_CLASS_INFO;
    // Successful responses (200–299)
    if (statusCode >= 200 && statusCode < 300) return HTTP_STATUS_CLASS_SUCCESS;
    // Redirection messages (300–399)
    if (statusCode >= 300 && statusCode < 400)
      return HTTP_STATUS_CLASS_REDIRECT;
    // Client error responses (400–499)
    if (statusCode >= 400 && statusCode < 500)
      return HTTP_STATUS_CLASS_ERROR_CLIENT;
    // Server error responses (500–599)
    if (statusCode >= 500 && statusCode < 600)
      return HTTP_STATUS_CLASS_ERROR_SERVER;
  }

  const MESSAGE_CONNECTION_ERROR =
    "We are sorrhing wong. Check your internet connection. Otherwise contact our support team please.";

  export function handleCatch(error: any, onFail: (message: string) => void) {
    onFail(MESSAGE_CONNECTION_ERROR);
    console.error(error);
  }
}
