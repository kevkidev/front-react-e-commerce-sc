import { getDatabase, ref, set } from "firebase/database";
import { Models } from "types/models";

export namespace ProductFirebaseService {
  export function createProduct(product: Models.Product) {
    const { name, quantity, description, category, imageUrl, owner } = product;
    const db = getDatabase();
    db &&
      set(ref(db, "accounts/" + owner.uid + "/products/" + product.uid), {
        name,
        quantity,
        description,
        category: category.uid,
        imageUrl,
        owner: owner.uid,
      }).then(() => console.log("Database: new product ok"));
  }
}
