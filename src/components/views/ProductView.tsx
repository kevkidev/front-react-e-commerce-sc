// import "./AccountPage.scss";
import { MakeProductModal } from "components/modals/MakeProductModal";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductService } from "services/ProductService";
import { RestService } from "services/RestService";
import { DTO } from "types/dto";
import { ACTION_UPDATE } from "types/types.d";

export default function ProductView() {
  const [value, setValue] = useState<DTO.Product>();
  const [category, setCategory] = useState<DTO.Category>();
  const { uid } = useParams();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const product = uid ? ProductService.findByUid(uid) : null;
    if (!product) throw Error("Product not found");
    setValue(product);
    const category =
      product.categoryUid && RestService.getCategory(product.categoryUid);
    if (!category) throw Error("Category not found");
    category && setCategory(category);
  }, [uid]);

  return (
    <main>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={value?.imageUrl}
          alt="the catalog's image"
        />
        <Card.Body>
          <Card.Title>{value?.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {category?.name}
          </Card.Subtitle>
          <Card.Text>{value?.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Quanity : <Badge bg="success">{value?.quantity}</Badge>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowModal(true)}
          >
            Modify
          </Button>
        </Card.Body>
      </Card>

      <MakeProductModal
        action={ACTION_UPDATE}
        shown={showModal}
        onHide={() => setShowModal(false)}
        title="Modify"
        product={value}
      />
    </main>
  );
}
