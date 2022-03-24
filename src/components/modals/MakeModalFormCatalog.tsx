import CatalogForm from "components/forms/CatalogForm";
import { useState } from "react";
import { DTO } from "types/dto";
import { FormAction } from "types/types";
import { MakeModalForm } from "./MakeModalForm";

type Props = {
  shown: boolean;
  onHide: () => void;
  catalog?: DTO.Catalog;
  title: string;
  action: FormAction;
};

export function MakeModalFormCatalog(props: Props) {
  const { shown, onHide, catalog, title, action } = props;
  const [resetForm, setResetForm] = useState(false);

  const FORM_ID = "form-catalog";

  return (
    <MakeModalForm
      title={title}
      shown={shown}
      onHide={onHide}
      actionTitle={action}
      formId={FORM_ID}
      onReset={setResetForm}
    >
      <CatalogForm
        formId={FORM_ID}
        resetTrigger={resetForm}
        catalog={catalog}
        onSave={onHide}
        action={action}
      />
    </MakeModalForm>
  );
}
