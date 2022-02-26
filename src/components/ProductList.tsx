// import "./AccountPage.scss";
import { Model } from "types/models";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Util } from "utils/Array";

export namespace ProductList {
  export interface Props {
    // onSave: ProductForm.OnSaveFunction;
    list: Model.Product[];
    onClickItem: (product: Model.Product) => void;
  }

  export function Component({ list, onClickItem }: Props) {
    const [sortedList, setSortedList] = useState<Model.Product[]>([]);

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

/* <Link to={RoutesPath.PRODUCT + "/" + p.uid}>{p.name}</Link> */

/* <a to={RoutesPath.PRODUCT + "/" + p.uid}>{p.name}</Link> */

/* <ProductBuilderModal
                    triggerTitle={p.name}
                    productId={p.uid}
                    triggerContent
                  /> */
