import { ModalForm } from "components/ModalForm";
import { ProductForm } from "components/ProductForm";
import { Models } from "types/models";
import { useState } from "react";

type Props = {
  product: Models.Product;
  title: string;
  onSave: ProductForm.OnSaveFunction;
  onClose: () => void;
  hidden: boolean;
  resetForm: boolean;
};

export default function ProductFormModal({
  product,
  title,
  hidden,
  onSave,
  onClose,
  resetForm,
}: Props) {
  const [updatedProduct, setUpdatedProduct] = useState<Models.Product>();

  const handleConfirm = () => {
    updatedProduct && onSave(updatedProduct);
    onClose();
  };

  return (
    <ModalForm.Component
      // formId={ProductForm.FORM_ID}
      title={title}
      hidden={hidden}
      onConfirm={handleConfirm}
      onClose={onClose}
      // closeButtonTitle={closeButtonTitle}
    >
      <ProductForm.Component
        product={product}
        onProductChange={setUpdatedProduct}
        resetForm={resetForm}
      />
    </ModalForm.Component>
  );
}
