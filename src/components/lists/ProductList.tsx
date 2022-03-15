import { MakeProductModal } from "components/modals/MakeProductModal";
import { RoutePath } from "main/RoutePath";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DTO } from "types/dto";
import { ACTION_UPDATE } from "types/types.d";
import { Util } from "utils/Array";

interface Props {
  list: DTO.Product[];
}

export function ProductList({ list }: Props) {
  const [sortedList, setSortedList] = useState<DTO.Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<DTO.Product>(list[0]);

  useEffect(() => {
    setSortedList(Util.Array.sortByNameAsc(list));
  }, [list]);

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
          {sortedList &&
            sortedList.map((product) => (
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
      <MakeProductModal
        action={ACTION_UPDATE}
        shown={showModal}
        onHide={() => setShowModal(false)}
        title="Modify"
        product={editing}
      />
    </>
  );
}
