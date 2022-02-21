// import "./AccountPage.scss";
import { Table } from "react-bootstrap";
import { Model } from "../../models";
import { ProductForm } from "./ProductForm";
import ProductFormModal from "./ProductFormModal";

export namespace ProductList {
  type Props = {
    onSave: ProductForm.OnSaveFunction;
    list: Model.Product[];
  };

  export function Component({ onSave, list }: Props) {
    // const [selectedProduct, selectProduct] = useState<Model.Product>();

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((p, i) => {
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
                <ProductFormModal
                  triggerAsContent
                  triggerContent={row}
                  product={p}
                  key={i + p.uid}
                  title="Update this product"
                  onSave={onSave}
                />
              );
            })}
        </tbody>
      </Table>
    );
  }
}
