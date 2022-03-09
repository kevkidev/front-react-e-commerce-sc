import { CatalogList } from "components/lists/CatalogList";
import { NewCatalogModal } from "components/modals/NewCatalogModal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Model } from "types/models";

export function CatalogsView() {
  const [showModal, setShowModal] = useState(false);

  const account = {
    uid: "sdqfsqdfze",
    email: "zdzer", // get from firebase
    invoiceAddress: {
      uid: "string",
      city: "string",
      street: "string",
      zipCode: 1,
      firstName: "string",
      lastName: "string", // consolidate
      phone: "string", //consolidate
    },
    deliveryAddress: {
      uid: "string",
      city: "string",
      street: "string",
      zipCode: 1,
      firstName: "string",
      lastName: "string", // consolidate
      phone: "string", //consolidate
    },
  };

  const list: Model.Catalog[] = [
    {
      uid: "cat1",
      label: "ZE e,op opo",
      owner: account,
      products: [],
      imageUrl: "s",
    },
    {
      uid: "cat2",
      label: "ZE e,op opo",
      owner: account,
      products: [],
      imageUrl: "s",
    },
  ];

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
      <hr />
      <CatalogList list={list} />
      <p>...</p>
    </main>
  );
}
