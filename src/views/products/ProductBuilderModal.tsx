// import "./AccountPage.scss";
import ModalForm from "../../components/ModalForm";
import ProductForm, { FORM_ID } from "./ProductForm";

type Props = {
  triggerTitle: React.ReactNode;
  productId?: string;
  triggerAsContent?: boolean;
};
// eslint-disable-next-line no-unused-vars
export default function ProductBuilderModal({
  triggerTitle,
  productId,
  triggerAsContent = false,
}: Props) {
  return (
    <ModalForm
      triggerTitle={triggerTitle}
      formId={FORM_ID}
      title="Add a product"
      triggerAsContent={triggerAsContent}
    >
      <ProductForm productId={productId} />
    </ModalForm>
  );
}
