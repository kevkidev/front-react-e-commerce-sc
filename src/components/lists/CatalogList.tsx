import { MakeCatalogModal } from "components/modals/MakeCatalogModal";
import { RoutePath } from "main/RoutePath";
import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DTO } from "types/dto";

interface Props {
  list: DTO.Catalog[];
}

export function CatalogList({ list }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<DTO.Catalog>(list[0]);
  return (
    <ListGroup as="ol" variant="flush">
      {list.map((catalog, index) => (
        <ListGroup.Item
          key={`${index}-${Date.now()}`}
          as="li"
          action
          className="d-flex justify-content-between align-items-start"
        >
          <Link
            className="ms-2 me-auto"
            to={`${RoutePath.sellCatalogs}${catalog.uid}`}
          >
            {catalog.title}
          </Link>
          <div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setEditing(catalog);
                setShowModal(true);
              }}
            >
              Edit
            </Button>
          </div>
        </ListGroup.Item>
      ))}
      <MakeCatalogModal
        shown={showModal}
        onHide={() => setShowModal(false)}
        catalog={editing}
        title="Modify a Catalog"
      />
    </ListGroup>
  );
}
