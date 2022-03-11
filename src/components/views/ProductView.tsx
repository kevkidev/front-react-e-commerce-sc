// import "./AccountPage.scss";
import { Auth } from "components/AuthContainer";
import { ProductList } from "components/ProductList";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { RestService } from "services/RestService";
import { Models } from "types/models";

export default function ProductView() {
  const [products, setProducts] = useState<Models.Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Models.Product>();
  selectedProducts;
  const [showForm, setShowForm] = useState(false);
  showForm;
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

  // const handleUpdate = (value: Models.Product) => {
  //   console.log("handleUpdate");

  //   const newList = _.cloneDeep(products);
  //   let index = newList.findIndex((prod) => value.uid == prod.uid);
  //   if (index > -1) {
  //     newList.splice(index, 1, value);
  //   }
  //   setProducts(newList);

  //   RestService.Product.update(value);
  // };

  const handleItemClick = (product: Models.Product) => {
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
      {/* {selectedProducts && (
        <ProductFormModal
          product={selectedProducts}
          title="Update this product"
          onSave={handleUpdate}
          onClose={() => setShowForm(false)}
          hidden={showForm}
          resetForm={false}
        />
      )} */}
    </Auth.Container>
  );
}
