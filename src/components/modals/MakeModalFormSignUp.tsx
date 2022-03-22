import { AUTH_FORM_ID_SIGN_UP } from "components/forms/AuthFormConfig";
import { AuthFormSignUp } from "components/forms/AuthFormSignUp";
import { useState } from "react";
import { MakeModalForm } from "./MakeModalForm";

type Props = {
  shown: boolean;
  onHide: () => void;
  title: string;
};

export function MakeModalFormSignUp(props: Props) {
  const { shown, onHide, title } = props;
  const [formSent, setFormSent] = useState(false);

  const handleHide = () => {
    setFormSent(false);
    onHide();
  };

  return (
    <MakeModalForm
      title={title}
      shown={shown}
      onHide={handleHide}
      actionTitle={"Sign Up"}
      formId={AUTH_FORM_ID_SIGN_UP}
      formSent={formSent}
    >
      <AuthFormSignUp onFormSent={setFormSent} />
    </MakeModalForm>
  );
}
