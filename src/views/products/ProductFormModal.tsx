// import "./AccountPage.scss";
import { ModalForm } from "../../components/ModalForm";
import { Model } from "../../models";
import { ProductForm } from "./ProductForm";

type Props = {
  triggerContent: React.ReactNode;
  product?: Model.Product;
  triggerAs: ModalForm.TriggerContentType;
  title: string;
  onSave: ProductForm.OnSaveFunction;
};
// eslint-disable-next-line no-unused-vars
export default function ProductFormModal({
  triggerContent,
  product,
  triggerAs,
  title,
  onSave,
}: Props) {
  return (
    <ModalForm.Component
      triggerContent={triggerContent}
      formId={ProductForm.FORM_ID}
      title={title}
      triggerAs={triggerAs}
    >
      <ProductForm.Component product={product} onSave={onSave} />
    </ModalForm.Component>
  );
}
