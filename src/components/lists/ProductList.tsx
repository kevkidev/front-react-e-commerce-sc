import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { DTO } from "types/dto";
import { Util } from "utils/Array";

interface Props {
  list: DTO.Product[];
  onClickItem: (product: DTO.Product) => void;
}

export function ProductList({ list, onClickItem }: Props) {
  const [sortedList, setSortedList] = useState<DTO.Product[]>([]);
  const [, setShowModal] = useState(false);

  useEffect(() => {
    setSortedList(Util.Array.sortByNameAsc(list));
  }, [list]);

  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedList &&
            sortedList.map((p, i) => (
              <tr key={p.uid} onClick={() => onClickItem(p)}>
                <td>{i}</td>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
