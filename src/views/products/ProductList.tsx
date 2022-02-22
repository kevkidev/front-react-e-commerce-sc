// import "./AccountPage.scss";
import { Table } from "react-bootstrap";
import { ModalForm } from "../../components/ModalForm";
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
                <tr>
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
                </tr>
              );
              return (
                <ProductFormModal
                  key={p.uid}
                  triggerAs={ModalForm.TRIGGER_TYPE_ROW}
                  triggerContent={row}
                  product={p}
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
