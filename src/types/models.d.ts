export namespace Models {
  export interface Address {
    uid: string;
    city: string;
    street: string;
    zipCode: number;
    firstName: string; // consolidate
    lastName: string; // consolidate
    phone: string; //consolidate
  }

  export interface Account {
    uid: string; // get from firebase
    email: string; // get from firebase
    invoiceAddress: Address;
    deliveryAddress: Address;
  }

  export interface Category {
    uid: string;
    name: string;
  }

  export interface Product {
    uid: string;
    name: string;
    category: Category;
    imageUrl: string;
    owner: Account;
    quantity: number;
    description: string;
  }

  export interface Catalog {
    uid: string;
    title: string;
    owner: Account;
    products: Product[];
    imageUrl: string;
  }

  export interface Comment {
    uid: string;
    author: Account;
    content: string;
  }

  export interface Offer {
    uid: string;
    product: Product;
    seller: Account;
    price: number;
    comments: Comment[];
  }

  type Subject = Catalog | Account | Offer;

  export interface Tags {
    uid: string;
    source: Account;
    target: Account;
    message: string;
    subject: Subject;
  }

  export interface Rating {
    value: 1 | 2 | 3 | 4 | 5;
    source: Account;
    target: Account | Offer;
  }

  export interface Status {
    value: "pending" | "payoff" | "delivery" | "done" | "canceled";
    reason: string;
  }

  export interface Delivery {
    service: string;
    address: Address;
    trackingNumber: string;
    trackingUrl: string;
  }

  export interface Order {
    uid: string;
    date: Date;
    status: Status;
    customer: Account;
    seller: Account;
    offer: Offer;
    quantity: number;
    delivery: Delivery;
    invoiceLink: string;
  }
}
