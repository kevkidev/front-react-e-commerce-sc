// import "./AccountPage.scss";
import { useModalDisplay } from "components/hooks/ModalHook";
import { MakeModalFormProduct } from "components/modals/MakeModalFormProduct";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductService } from "services/ProductService";
import { RestService } from "services/RestService";
import { DTO } from "types/dto";
import { ACTION_UPDATE } from "types/types.d";
import "./ProductView.scss";

interface Props {
  product?: DTO.Product;
}
export default function ProductView(props: Props) {
  const { product } = props;
  const [value, setValue] = useState<DTO.Product>();
  const [category, setCategory] = useState<DTO.Category>();
  const { uid } = useParams();
  const { showModal, setShowModal } = useModalDisplay();

  useEffect(() => {
    if (product) {
      setValue(product);
    } else {
      const product = uid ? ProductService.findByUid(uid) : undefined;
      if (!product) throw Error("Product not found");
      setValue(product);
    }
  }, [uid, product]);

  useEffect(() => {
    if (!value) return;
    const category =
      value.categoryUid && RestService.getCategory(value.categoryUid);
    if (!category) throw Error("Category not found");
    category && setCategory(category);
  }, [value]);

  return (
    <main>
      <Card style={{ width: "18rem" }} className="ProductView">
        <Card.Img
          variant="top"
          src={value?.imageUrl}
          alt="the catalog's image"
        />
        <Card.Body className="ProductView__body">
          <Card.Title>{value?.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {category?.name}
          </Card.Subtitle>
          <Card.Text className="ProductView__description">
            {value?.description}
          </Card.Text>
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

      <MakeModalFormProduct
        action={ACTION_UPDATE}
        shown={showModal}
        onHide={() => setShowModal(false)}
        title="Modify"
        product={value}
      />
    </main>
  );
}
