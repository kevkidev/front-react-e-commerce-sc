import "components/ModalForm.scss";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export namespace ModalForm {
  type Props = {
    // formId: string;
    children: React.ReactNode;
    confirmButtonTitle?: string;
    closeButtonTitle?: string;
    title: string;
    hidden: boolean;
    onConfirm: () => void;
    onClose: () => void;
  };

  export function Component({
    // formId,
    children,
    confirmButtonTitle = "Confirm",
    closeButtonTitle = "Cancel",
    title,
    onConfirm,
    onClose,
    hidden,
  }: Props) {
    const [submitButtonDisplay, setSubmitButtonDisplay] = useState<
      "block" | "none"
    >("block");

    useEffect(() => {
      if (hidden) setSubmitButtonDisplay("block");
    }, [hidden]);

    // const triggerTypeRow = React.cloneElement(triggerContent as ReactElement, {
    //   onClick: handleShow,
    //   className: "ModalForm__trigger ModalForm__trigger--hover",
    // });

    // const triggerTypeButton = (
    //   <Button variant="success" onClick={handleShow}>
    //     {triggerContent}
    //   </Button>
    // );

    // const handleConfirm = () => {
    //   onConfirm();
    // };

    return (
      <div className="ModalForm">
        {/* {triggerAs === "row" ? triggerTypeRow : triggerTypeButton} */}

        <Modal
          show={hidden}
          onHide={onClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              {closeButtonTitle}
            </Button>
            <Button
              variant="primary"
              style={{ display: submitButtonDisplay }}
              onClick={onConfirm}
            >
              {confirmButtonTitle}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
