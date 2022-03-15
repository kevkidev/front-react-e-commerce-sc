import { FormAction } from "types/types.d";
import { Modal } from "./Modal";
import { ModalFooterForm } from "./ModalFooterForm";

type Props = {
  shown: boolean;
  onHide: () => void;
  onReset: Function;
  title: string;
  action: FormAction;
  formId: string;
  children: React.ReactNode;
};

export function MakeModalForm(props: Props) {
  const { children, shown, onHide, onReset, title, action, formId } = props;

  const footer = (
    <ModalFooterForm
      action={action}
      formId={formId}
      onHide={onHide}
      onReset={onReset}
    />
  );

  return (
    <Modal title={title} footer={footer} shown={shown} onHide={onHide}>
      {children}
    </Modal>
  );
}
