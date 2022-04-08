import ProductView from "components/views/ProductView";
import { DTO } from "types/dto";
import "./ProductList.scss";

interface Props {
  list: DTO.Product[];
}

export function ProductList({ list }: Props) {
  return (
    <>
      <div className="ProductList">
        {list &&
          list.map((value) => (
            <div className="ProductList__item" key={value.uid}>
              <ProductView product={value} />
            </div>
          ))}
      </div>
    </>
  );
}
