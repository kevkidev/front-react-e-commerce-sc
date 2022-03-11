import ProductForm from "components/forms/ProductForm";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { DTO } from "types/dto";
import { FormAction } from "types/types";
import { Modal } from "./Modal";

type Props = {
  shown: boolean;
  onHide: () => void;
  product?: DTO.Product;
  title: string;
  action: FormAction;
};

export function MakeProductModal(props: Props) {
  const { shown, onHide, product, title, action } = props;
  const [resetForm, setResetForm] = useState(false);
  const FORM_ID = "new-product-form";
  const footer = (
    <>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button
        variant="secondary"
        onMouseDown={() => {
          setResetForm(false);
        }}
        onMouseUp={() => {
          setResetForm(true);
        }}
      >
        Reset
      </Button>
      <Button variant="primary" type="submit" form={FORM_ID}>
        {action[0].toUpperCase()}
        {action.slice(1)}
      </Button>
    </>
  );

  const handleSave = (data: DTO.Product) => {
    console.log(JSON.stringify(data));

    onHide();
  };

  return (
    <Modal title={title} footer={footer} shown={shown} onHide={onHide}>
      <ProductForm
        formId={FORM_ID}
        resetTrigger={resetForm}
        value={product}
        onSave={handleSave}
        action={action}
      />
    </Modal>
  );
}
