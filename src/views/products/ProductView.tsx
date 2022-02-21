// import "./AccountPage.scss";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Auth } from "../../components/AuthContainer";
import { ModalForm } from "../../components/ModalForm";
import { Model } from "../../models";
import { RestService } from "../../services/RestService";
import ProductFormModal from "./ProductFormModal";
import { ProductList } from "./ProductList";

export default function ProductView() {
  const [products, setProducts] = useState<Model.Product[]>([]);

  useEffect(() => {
    RestService.Product.getAll().then((list) => setProducts(list));
  }, []);

  const handleCreate = (value: Model.Product) => {
    const newList = _.cloneDeep(products);
    newList.push(value);
    setProducts(newList);

    RestService.Product.add(value);
  };

  const handleUpdate = (value: Model.Product) => {
    const newList = _.cloneDeep(products);
    let index = newList.findIndex((prod) => value.uid == prod.uid);
    if (index > -1) {
      newList.splice(index, 1, value);
    }
    setProducts(newList);

    RestService.Product.update(value);
  };

  return (
    <Auth.Container>
      <h1>My Products</h1>
      <ProductFormModal
        triggerAs={ModalForm.TRIGGER_TYPE_TEXT}
        triggerContent="New Product"
        title="Create a product"
        onSave={handleCreate}
      />
      <hr />
      <ProductList.Component onSave={handleUpdate} list={products} />
    </Auth.Container>
  );
}
