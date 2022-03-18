import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { ModalFooterForm } from "./ModalFooterForm";

type Props = {
  shown: boolean;
  onHide: () => void;
  onReset?: Function;
  title: string;
  actionTitle: string;
  formId: string;
  children: React.ReactNode;
  formSent?: boolean;
};

export function MakeModalForm(props: Props) {
  const {
    children,
    shown,
    onHide,
    onReset,
    title,
    formId,
    actionTitle,
    formSent,
  } = props;

  const [hideSubmitButton, setHideSubmitButton] = useState(formSent);

  useEffect(() => {
    formSent && setHideSubmitButton(true);
  }, [formSent]);

  const handleHide = () => {
    // to reset de submit button display after close
    setHideSubmitButton(false);
    onHide();
  };

  const footer = (
    <ModalFooterForm
      actionTitle={actionTitle}
      formId={formId}
      onHide={handleHide}
      onReset={onReset}
      hideSubmitButton={hideSubmitButton}
    />
  );

  return (
    <Modal title={title} footer={footer} shown={shown} onHide={handleHide}>
      {children}
    </Modal>
  );
}
