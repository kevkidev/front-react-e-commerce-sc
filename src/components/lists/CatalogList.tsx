import { RoutePath } from "main/RoutePath";
import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Model } from "types/models";

interface Props {
  list: Model.Catalog[];
}

export function CatalogList({ list }: Props) {
  const navigate = useNavigate();
  return (
    <ListGroup as="ol" variant="flush">
      {list.map(({ uid, label }, index) => (
        <ListGroup.Item
          key={`${index}-${Date.now()}`}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">{label}</div>
          <div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate(`${RoutePath.sellCatalogs}${uid}`)}
            >
              Edit
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
