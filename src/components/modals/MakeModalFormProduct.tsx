import ProductForm from "components/forms/ProductForm";
import { useState } from "react";
import { DTO } from "types/dto";
import { FormAction } from "types/types";
import { MakeModalForm } from "./MakeModalForm";

type Props = {
  shown: boolean;
  onHide: () => void;
  product?: DTO.Product;
  title: string;
  action: FormAction;
};

export function MakeModalFormProduct(props: Props) {
  const { shown, onHide, product, title, action } = props;
  const [resetForm, setResetForm] = useState(false);

  const handleSave = () => {
    onHide();
  };

  const FORM_ID = "product-form";

  return (
    <MakeModalForm
      title={title}
      shown={shown}
      onHide={onHide}
      onReset={setResetForm}
      actionTitle={action}
      formId={FORM_ID}
    >
      <ProductForm
        formId={FORM_ID}
        resetTrigger={resetForm}
        value={product}
        onSave={handleSave}
        action={action}
      />
    </MakeModalForm>
  );
}
