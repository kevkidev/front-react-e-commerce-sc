import { CatalogList } from "components/lists/CatalogList";
import { MakeModalFormCatalog } from "components/modals/MakeModalFormCatalog";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { CatalogService } from "services/CatalogService";
import { DTO } from "types/dto";

export function CatalogsView() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState<DTO.Catalog[]>([]);

  useEffect(() => {
    setList(CatalogService.findNextCatalogs("accountUid"));
  }, [setList]);

  return (
    <main>
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
      <Outlet />
    </main>
  );
}
