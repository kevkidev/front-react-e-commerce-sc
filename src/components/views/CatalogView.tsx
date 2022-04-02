import { CatalogContext } from "components/contexts";
import { useModalDisplay } from "components/hooks/ModalHook";
import { Pagination } from "components/lists/Pagination";
import { ProductList } from "components/lists/ProductList";
import { MakeModalFormProduct } from "components/modals/MakeModalFormProduct";
import React, { useEffect, useState } from "react";
import { Button, Figure } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CatalogService } from "services/CatalogService";
import { ProductService } from "services/ProductService";
import { DTO } from "types/dto";
import { ACTION_CREATE, ListResultLimits } from "types/types.d";

const PAGE_SIZE = 3;

export function CatalogView() {
  const [catalog, setCatalog] = useState<DTO.Catalog>();
  const { uid } = useParams();
  const [productList, setProductList] = useState<DTO.Product[]>([]);
  const { showModal, setShowModal } = useModalDisplay();
  const [limits, setLimits] = useState<ListResultLimits>();

  useEffect(() => {
    uid && CatalogService.read(uid, setCatalog);
  }, [uid]);

  // set the list after catalog has been set
  useEffect(() => {
    catalog &&
      ProductService.fetchFromCatalog(
        { onFetch, maxItems: PAGE_SIZE },
        catalog.uid
      );
  }, [catalog]);

  const onFetch = (list: DTO.Product[], limits: ListResultLimits) => {
    setProductList(list);
    setLimits(limits);
  };

  const handlePagination = (listResultLimits: ListResultLimits) => {
    catalog &&
      ProductService.fetchFromCatalog(
        {
          onFetch,
          listResultLimits,
          maxItems: PAGE_SIZE,
        },
        catalog.uid
      );
  };

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
      <CatalogContext.Provider value={catalog}>
        <ProductList list={productList} />
        {limits && <Pagination limits={limits} ogGetData={handlePagination} />}
        <MakeModalFormProduct
          action={ACTION_CREATE}
          shown={showModal}
          onHide={() => setShowModal(false)}
          title="Create a Product"
        />
      </CatalogContext.Provider>
    </main>
  );
}
