// import "./AccountPage.scss";
import { useLayoutEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Auth } from "../../components/AuthContainer";
import { RestService } from "../../services/RestService";
import ProductBuilderModal from "./ProductBuilderModal";

export default function ProductView() {
  // const [selectedProduct, selectProduct] = useState<Model.Product>();
  const [value, setValue] = useState("init");

  useLayoutEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Auth.Container>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>My Products</h1>
      <ProductBuilderModal triggerTitle="New Product" />
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {RestService.products.map((p, i) => {
            const row = (
              <>
                <td>{i}</td>
                <td>
                  {p.name}
                  {/* <Link to={RoutesPath.PRODUCT + "/" + p.uid}>{p.name}</Link> */}
                  {/* <a to={RoutesPath.PRODUCT + "/" + p.uid}>{p.name}</Link> */}
                  {/* <ProductBuilderModal
                    triggerTitle={p.name}
                    productId={p.uid}
                    triggerContent
                  /> */}
                </td>
                <td>{p.quantity}</td>
              </>
            );
            return (
              <ProductBuilderModal
                triggerAsContent
                triggerTitle={row}
                productId={p.uid}
                key={i + p.uid}
              />
            );
          })}
        </tbody>
      </Table>
      {/* <ProductBuilderModal
        triggerAsContent
        triggerTitle={row}
        productId={p.uid}
        key={i + p.uid}
      /> */}
    </Auth.Container>
  );
}
