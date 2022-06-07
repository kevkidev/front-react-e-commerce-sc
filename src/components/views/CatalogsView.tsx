import { useModalDisplay } from "components/hooks/ModalHook";
import { CatalogList } from "components/lists/CatalogList";
import { Pagination } from "components/lists/Pagination";
import { MakeModalFormCatalog } from "components/modals/MakeModalFormCatalog";
import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { CatalogService } from "services/CatalogService";
import { DTO } from "types/dto";
import { ListResultLimits } from "types/types.d";

const PAGE_SIZE = 3;

export function CatalogsView() {
  const { showModal, setShowModal } = useModalDisplay();
  const [list, setList] = useState<DTO.Catalog[]>([]);
  const [limits, setLimits] = useState<ListResultLimits>();

  useEffect(() => {
    CatalogService.fetchCatalogs({ onFetch, maxItems: PAGE_SIZE });
  }, []);

  const onFetch = useCallback(
    (list: DTO.Catalog[], limits: ListResultLimits) => {
      setList(list);
      setLimits(limits);
    },
    [list]
  );

  const handlePagination = (listResultLimits: ListResultLimits) => {
    CatalogService.fetchCatalogs({
      onFetch,
      listResultLimits,
      maxItems: PAGE_SIZE,
    });
  };

  return (
    <main className="container">
      <h1>Catalogs</h1>
      <Button
        variant="success"
        onClick={() => {
          setShowModal(true);
        }}
      >
        New Catalog
      </Button>
      <MakeModalFormCatalog
        action="create"
        shown={showModal}
        onHide={() => setShowModal(false)}
        title="Create a Catalog"
      />
      <hr />
      <CatalogList list={list} />
      {limits && <Pagination limits={limits} ogGetData={handlePagination} />}
      <Outlet />
    </main>
  );
}
