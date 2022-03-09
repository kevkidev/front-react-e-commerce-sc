import { NewCatalogModal } from "components/modals/NewCatalogModal";
import { useState } from "react";
import { Button } from "react-bootstrap";

export function CatalogsView() {
  const [showModal, setShowModal] = useState(false);

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
      <NewCatalogModal shown={showModal} onHide={() => setShowModal(false)} />
      <p>...</p>
    </main>
  );
}
