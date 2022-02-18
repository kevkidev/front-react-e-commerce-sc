// import "./AccountPage.scss";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Auth } from "../../components/AuthContainer";
import { RoutesPath } from "../../routes";
import { RestService } from "../../services/RestService";
import CreateProductModal from "./CreateProductModal";

export default function ProductView() {
  return (
    <Auth.Container>
      <h1>My Products</h1>
      <CreateProductModal />
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
          {RestService.products.map((p, i) => (
            <tr key={i + p.uid}>
              <td>{i}</td>
              <td>
                <Link to={RoutesPath.PRODUCT}>{p.name}</Link>
              </td>
              <td>{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Auth.Container>
  );
}
