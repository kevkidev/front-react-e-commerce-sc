import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import "./AuthPage.scss";

type Props = {
  formId: string;
  children: React.ReactNode;
  buttonTitle: string;
  actionTitle?: string;
  title: string;
  onShow?: () => void;
  onClose?: () => void;
};

export default function ModalForm({
  formId,
  children,
  buttonTitle,
  actionTitle = "Confirm",
  title,
  onShow = () => {},
  onClose = () => {},
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

  return (
    <div className="sign-up-modal">
      <Button variant="success" onClick={handleShow}>
        {buttonTitle}
      </Button>

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
    </div>
  );
}
