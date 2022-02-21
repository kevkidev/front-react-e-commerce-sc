// import "./AccountPage.scss";
import ModalForm from "../../components/ModalForm";
import { Model } from "../../models";
import { ProductForm } from "./ProductForm";

type Props = {
  triggerContent: React.ReactNode;
  product?: Model.Product;
  triggerAsContent?: boolean;
  title: string;
  onSave: ProductForm.OnSaveFunction;
};
// eslint-disable-next-line no-unused-vars
export default function ProductFormModal({
  triggerContent,
  product,
  triggerAsContent = false,
  title,
  onSave,
}: Props) {
  return (
    <ModalForm
      triggerContent={triggerContent}
      formId={ProductForm.FORM_ID}
      title={title}
      triggerAsContent={triggerAsContent}
    >
      <ProductForm.Component product={product} onSave={onSave} />
    </ModalForm>
  );
}
