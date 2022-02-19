import React, { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalForm.scss";

type Props = {
  formId: string;
  children: React.ReactNode;
  triggerTitle: React.ReactNode;
  actionTitle?: string;
  title: string;
  onShow?: () => void;
  onClose?: () => void;
  triggerAsContent?: boolean;
};

export default function ModalForm({
  formId,
  children,
  triggerTitle,
  actionTitle = "Confirm",
  title,
  onShow = () => {},
  onClose = () => {},
  triggerAsContent = false,
}: Props) {
  const [show, setShow] = useState(false);
  const [submitButtonDisplay, setSubmitButtonDisplay] = useState<
    "block" | "none"
  >("block");

  const handleShow = () => {
    onShow();
    setShow(true);
    setSubmitButtonDisplay("block");
  };

  const handleClose = () => {
    onClose();
    setShow(false);
  };

  const triggerContent = (
    <tr onClick={handleShow} className="modal-form-trigger">
      {/* <div onClick={handleShow} className="trigger-container"> */}
      {triggerTitle}
      {/* </div> */}
    </tr>
  );
  const triggerButton = (
    <Button variant="success" onClick={handleShow}>
      {triggerTitle}
    </Button>
  );
  return (
    <Fragment>
      {triggerAsContent ? triggerContent : triggerButton}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            form={formId}
            style={{ display: submitButtonDisplay }}
          >
            {actionTitle}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
