// import "./AccountPage.scss";
import React, { useEffect, useState } from "react";
import { Auth } from "../../components/AuthContainer";
import { Model } from "../../models";
import { RestService } from "../../services/RestService";
import ProductFormModal from "./ProductFormModal";
import { ProductList } from "./ProductList";

export default function ProductView() {
  // const [selectedProduct, selectProduct] = useState<Model.Product>();
  const [products, setProducts] = useState<Model.Product[]>([]);

  const handleCreate = (value: Model.Product) => {
    console.log(value);
    RestService.Product.add(value, handleProductUpdate);
    console.log(RestService.Product.getAll());

    // setProducts(RestService.Product.getAll());
  };

  const handleUpdate = (value: Model.Product) => {
    console.log(value);
    RestService.Product.update(value, handleProductUpdate);
    // setProducts(RestService.Product.getAll());
  };

  const handleProductUpdate = (list: Model.Product[]) => {
    console.log("handleProductUpdate");
    setProducts(list);
  };

  useEffect(() => {
    RestService.Product.refreshList(handleProductUpdate);
  }, []);

  return (
    <Auth.Container>
      <h1>My Products</h1>
      <ProductFormModal
        triggerContent="New Product"
        title="Create a product"
        onSave={handleCreate}
      />
      <hr />
      <ProductList.Component onSave={handleUpdate} list={products} />
    </Auth.Container>
  );
}
