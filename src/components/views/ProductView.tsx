// import "./AccountPage.scss";
import { Auth } from "components/AuthContainer";
import ProductFormModal from "components/ProductFormModal";
import { ProductList } from "components/ProductList";
import { Model } from "types/models";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { RestService } from "services/RestService";

export default function ProductView() {
  const [products, setProducts] = useState<Model.Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Model.Product>();
  const [showForm, setShowForm] = useState(false);
  const [, setResetForm] = useState(false);
  // const [initialProduct] = useState<Model.Product>({
  //   uid: "",
  //   category: {
  //     name: "unknow",
  //     uid: "unknow",
  //   },
  //   imageUrl: "",
  //   name: "",
  //   owner: RestService.currentAccount,
  //   quantity: 1,
  //   description: "",
  // });

  useEffect(() => {
    RestService.Product.getAll().then((list) => setProducts(list));
  }, []);

  // const handleCreate = (value: Model.Product) => {
  //   const product = _.cloneDeep(value);
  //   product.uid = `product-${Date.now()}`;

  //   const newList = _.cloneDeep(products);
  //   newList.push(product);
  //   setProducts(newList);

  //   RestService.Product.add(value, () => {
  //     // createFormResponse("The product as been added with success.")
  //     // TODO : afficher un toast avec message
  //   });
  // };

  const handleUpdate = (value: Model.Product) => {
    console.log("handleUpdate");

    const newList = _.cloneDeep(products);
    let index = newList.findIndex((prod) => value.uid == prod.uid);
    if (index > -1) {
      newList.splice(index, 1, value);
    }
    setProducts(newList);

    RestService.Product.update(value);
  };

  const handleItemClick = (product: Model.Product) => {
    setSelectedProducts(product);
    setShowForm(true);
  };

  return (
    <Auth.Container>
      <h1>My Products</h1>
      <Button
        variant="success"
        onClick={() => {
          setShowForm(true);
          setResetForm(true);
        }}
      >
        New Product
      </Button>
      {/* <ProductFormModal
        title="Create a product"
        onSave={handleCreate}
        onClose={() => setShowForm(false)}
        hidden={showForm}
        product={initialProduct}
        resetForm={resetForm}
      /> */}
      <hr />
      <ProductList.Component
        // onSave={handleUpdate}
        list={products}
        onClickItem={handleItemClick}
      />
      {selectedProducts && (
        <ProductFormModal
          product={selectedProducts}
          title="Update this product"
          onSave={handleUpdate}
          onClose={() => setShowForm(false)}
          hidden={showForm}
          resetForm={false}
        />
      )}
    </Auth.Container>
  );
}
