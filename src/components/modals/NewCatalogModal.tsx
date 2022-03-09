import NewCatalogform from "components/forms/NewCatalogForm";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "./Modal";

type Props = {
  shown: boolean;
  onHide: () => void;
};

export function NewCatalogModal({ shown, onHide }: Props) {
  const [resetForm, setResetForm] = useState(false);

  const FORM_ID = "new-catalog-form";
  const footer = (
    <>
      <Button variant="secondary" onClick={() => onHide()}>
        Cancel
      </Button>
      <Button
        variant="secondary"
        onMouseDown={() => {
          setResetForm(false);
        }}
        onMouseUp={() => {
          setResetForm(true);
        }}
      >
        Reset
      </Button>
      <Button
        variant="primary"
        onClick={() => onHide()}
        type="submit"
        form={FORM_ID}
      >
        Create
      </Button>
    </>
  );
  return (
    <Modal title="New Catalogue" footer={footer} shown={shown} onHide={onHide}>
      <NewCatalogform formId={FORM_ID} resetTrigger={resetForm} />
    </Modal>
  );
}
