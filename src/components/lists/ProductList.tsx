import { useModalDisplay } from "components/hooks/ModalHook";
import { MakeModalFormProduct } from "components/modals/MakeModalFormProduct";
import { RoutePath } from "main/RoutePath";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DTO } from "types/dto";
import { ACTION_UPDATE } from "types/types.d";

interface Props {
  list: DTO.Product[];
}

export function ProductList({ list }: Props) {
  const { showModal, setShowModal } = useModalDisplay();
  const [editing, setEditing] = useState<DTO.Product>(list[0]);

  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((product) => (
              <tr key={product.uid}>
                <td>
                  <Link
                    className="ms-2 me-auto"
                    to={`${RoutePath.sellProducts}${product.uid}`}
                  >
                    {product.name}
                  </Link>
                </td>
                <td>{product.quantity}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setShowModal(true);
                      setEditing(product);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <MakeModalFormProduct
        action={ACTION_UPDATE}
        shown={showModal}
        onHide={() => setShowModal(false)}
        title="Modify"
        product={editing}
      />
    </>
  );
}
