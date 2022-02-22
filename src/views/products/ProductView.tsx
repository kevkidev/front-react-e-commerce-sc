// import "./AccountPage.scss";
import React, { useEffect, useState } from "react";
import { Auth } from "../../components/AuthContainer";
import { ModalForm } from "../../components/ModalForm";
import { Model } from "../../models";
import { RestService } from "../../services/RestService";
import ProductFormModal from "./ProductFormModal";
import { ProductList } from "./ProductList";

export default function ProductView() {
  // const [selectedProduct, selectProduct] = useState<Model.Product>();
  const [products, setProducts] = useState<Model.Product[]>(
    RestService.Product.getAll()
  );

  const handleCreate = (value: Model.Product) => {
    console.log(value);
    products.pop();
    RestService.Product.add(value);
    console.log(RestService.Product.getAll());
    setProducts(RestService.Product.getAll());
  };

  const handleUpdate = (value: Model.Product) => {
    console.log(value);
    RestService.Product.update(value);
    setProducts(RestService.Product.getAll());
  };

  // const handleProductUpdate = (list: Model.Product[]) => {
  //   console.log("handleProductUpdate");
  //   console.log(list[0]);
  //   console.log(products[0]);

  //   setProducts(list);
  // };

  useEffect(() => {
    console.log("effect");
  }, [products]);

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
