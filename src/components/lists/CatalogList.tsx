import { NewCatalogModal } from "components/modals/NewCatalogModal";
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

  return (
    <ListGroup as="ol" variant="flush">
      {list.map(({ uid, title: label }, index) => (
        <ListGroup.Item
          key={`${index}-${Date.now()}`}
          as="li"
          action
          className="d-flex justify-content-between align-items-start"
        >
          <Link className="ms-2 me-auto" to={`${RoutePath.sellCatalogs}${uid}`}>
            {label}
          </Link>
          <div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Edit
            </Button>
          </div>
        </ListGroup.Item>
      ))}
      <NewCatalogModal shown={showModal} onHide={() => setShowModal(false)} />
    </ListGroup>
  );
}
