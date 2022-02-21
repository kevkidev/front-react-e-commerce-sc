import React, { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalForm.scss";

type Props = {
  formId: string;
  children: React.ReactNode;
  triggerContent: React.ReactNode;
  actionTitle?: string;
  closeTitle?: string;
  title: string;
  onShow?: () => void;
  onClose?: () => void;
  triggerAsContent?: boolean;
};

export default function ModalForm({
  formId,
  children,
  triggerContent,
  actionTitle = "Confirm",
  closeTitle = "Cancel",
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

  const triggerTypeContent = (
    <tr onClick={handleShow} className="modal-form-trigger">
      {/* <div onClick={handleShow} className="trigger-container"> */}
      {triggerContent}
      {/* </div> */}
    </tr>
  );
  const triggerTypeButton = (
    <Button variant="success" onClick={handleShow}>
      {triggerContent}
    </Button>
  );
  return (
    <Fragment>
      {triggerAsContent ? triggerTypeContent : triggerTypeButton}

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
            {closeTitle}
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
