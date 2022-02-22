import React, { Fragment, ReactElement, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalForm.scss";

export namespace ModalForm {
  export const TRIGGER_TYPE_ROW = "row";
  export const TRIGGER_TYPE_TEXT = "text";
  export type TriggerContentType =
    | typeof TRIGGER_TYPE_ROW
    | typeof TRIGGER_TYPE_TEXT;

  type Props = {
    formId: string;
    children: React.ReactNode;
    triggerContent: React.ReactNode;
    actionTitle?: string;
    closeTitle?: string;
    title: string;
    onShow?: () => void;
    onClose?: () => void;
    triggerAs: TriggerContentType;
  };

  export function Component({
    formId,
    children,
    triggerContent,
    actionTitle = "Confirm",
    closeTitle = "Cancel",
    title,
    onShow = () => {},
    onClose = () => {},
    triggerAs,
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

    const triggerTypeRow = React.cloneElement(triggerContent as ReactElement, {
      onClick: handleShow,
      className: "modal-form-trigger",
    });
    // (
    // <tbody onClick={handleShow} className="modal-form-trigger">
    {
      /* <div onClick={handleShow} className="trigger-container"> */
    }
    // {triggerContent}
    {
      /* </div> */
    }
    // </tbody>
    // );
    const triggerTypeButton = (
      <Button variant="success" onClick={handleShow}>
        {triggerContent}
      </Button>
    );
    return (
      <Fragment>
        {triggerAs === "row" ? triggerTypeRow : triggerTypeButton}

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
}
