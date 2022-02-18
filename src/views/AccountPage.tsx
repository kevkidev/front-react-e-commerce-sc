// import "./AccountPage.scss";
import { Nav } from "react-bootstrap";
import { Auth } from "../components/AuthContainer";
import ProductView from "./products/ProductView";

export default function AccountPage() {
  return (
    <Auth.Container>
      {/* <Auth.AnonymousContent>
        <p>Nothing to see</p>
      </Auth.AnonymousContent>
      <Auth.SignedContent>
        
      </Auth.SignedContent> */}
      {/* {logged ? ( */}
      <div>
        <h1>My Account</h1>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Catalogs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Orders</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Notifications</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item> */}
        </Nav>
        <hr />
        <ProductView />
      </div>
    </Auth.Container>
  );
}
