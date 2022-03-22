import { useModalDisplay } from "components/hooks/ModalHook";
import { ProductList } from "components/lists/ProductList";
import { MakeModalFormProduct } from "components/modals/MakeModalFormProduct";
import { useEffect, useState } from "react";
import { Button, Figure } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CatalogService } from "services/CatalogService";
import { DTO } from "types/dto";

export function CatalogView() {
  const [catalog, setCatalog] = useState<DTO.Catalog>();
  const { uid } = useParams();
  const [productList, setProductList] = useState<DTO.Product[]>([]);
  const { showModal, setShowModal } = useModalDisplay();

  useEffect(() => {
    uid && setCatalog(CatalogService.findCatalog(uid));
    uid && setProductList(CatalogService.findNextProducts(uid));
  }, [uid]);

  return (
    <main>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="the catalog's image"
          src={catalog?.imageUrl}
        />
      </Figure>
      <h2>{catalog?.title}</h2>
      <Button
        variant="success"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add a product
      </Button>
      <ProductList list={productList} />

      <MakeModalFormProduct
        action="create"
        shown={showModal}
        onHide={() => setShowModal(false)}
        title="Create a Product"
      />
    </main>
  );
}
