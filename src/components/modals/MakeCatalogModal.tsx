import CatalogForm from "components/forms/CatalogForm";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { DTO } from "types/dto";
import { Modal } from "./Modal";

type Props = {
  shown: boolean;
  onHide: () => void;
  catalog?: DTO.Catalog;
  title: string;
};

export function MakeCatalogModal({ shown, onHide, catalog, title }: Props) {
  const [resetForm, setResetForm] = useState(false);

  const FORM_ID = "new-catalog-form";

  const footer = (
    <>
      <Button variant="secondary" onClick={onHide}>
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
      <Button variant="primary" type="submit" form={FORM_ID}>
        Create
      </Button>
    </>
  );

  const handleSave = (data: DTO.Catalog) => {
    console.log("udate :" + data);
    onHide();
  };

  return (
    <Modal title={title} footer={footer} shown={shown} onHide={onHide}>
      <CatalogForm
        formId={FORM_ID}
        resetTrigger={resetForm}
        catalog={catalog}
        onSave={handleSave}
      />
    </Modal>
  );
}
