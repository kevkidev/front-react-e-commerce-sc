// import "./AccountPage.scss";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Models } from "types/models";
import { Util } from "utils/Array";

export namespace ProductList {
  export interface Props {
    // onSave: ProductForm.OnSaveFunction;
    list: Models.Product[];
    onClickItem: (product: Models.Product) => void;
  }

  export function Component({ list, onClickItem }: Props) {
    const [sortedList, setSortedList] = useState<Models.Product[]>([]);

    useEffect(() => {
      setSortedList(Util.Array.sortByNameAsc(list));
    }, [list]);

    // useEffect(() => {
    //   setSortedList(Util.Array.sortByNameAsc(list));
    // }, [list]);

    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {sortedList &&
              sortedList.map((p, i) => (
                <tr key={p.uid} onClick={() => onClickItem(p)}>
                  <td>{i}</td>
                  <td>{p.name}</td>
                  <td>{p.quantity}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </>
    );
  }
}

/* <Link to={RoutesTree.PRODUCT + "/" + p.uid}>{p.name}</Link> */

/* <a to={RoutesTree.PRODUCT + "/" + p.uid}>{p.name}</Link> */

/* <ProductBuilderModal
                    triggerTitle={p.name}
                    productId={p.uid}
                    triggerContent
                  /> */
