export namespace DTO {
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
    invoiceAddressUid: string;
    deliveryAddressUid: string;
  }

  export interface Category {
    uid: string;
    name: string;
  }

  export interface Product {
    uid: string;
    name: string;
    categoryUid: string;
    imageUrl: string;
    ownerUid: string;
    quantity: number;
    description: string;
  }

  export interface Catalog {
    uid: string;
    title: string;
    ownerUid: string;
    productsUids: string[];
    imageUrl: string;
  }

  export interface Comment {
    uid: string;
    authorUid: string;
    content: string;
  }

  export interface Offer {
    uid: string;
    productUid: string;
    sellerUid: string;
    price: number;
    commentsUids: string[];
  }

  // type Subject = Catalog | Account | Offer;

  export interface Tags {
    uid: string;
    sourceUid: string; // Account
    targetUid: string; // Account
    message: string;
    subjectUid: string; //Subject
  }

  export interface Rating {
    value: 1 | 2 | 3 | 4 | 5;
    sourceUid: string; //Account
    targetUid: string; //Account | Offer
  }

  export interface Status {
    value: "pending" | "payoff" | "delivery" | "done" | "canceled";
    reason: string;
  }

  export interface Delivery {
    service: string;
    addressUid: string; // Address
    trackingNumber: string;
    trackingUrl: string;
  }

  export interface Order {
    uid: string;
    date: Date;
    statusUid: string; //Status
    customerUid: string; //Account
    sellerUid: string; //Account
    offerUid: string; //Offer
    quantity: number;
    deliveryUid: string; //Delivery
    invoiceLink: string;
  }
}
