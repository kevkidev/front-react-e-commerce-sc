import AuthForm from "@components/AuthFrom";
import "@components/FormInputGroup.scss";
import React, { useContext, useState } from "react";

export const DEFAULT_VALID_FEEDBACK = "Nice. It looks good :)";
export const DEFAULT_INVALID_FEEDBACK = "Sorry. It is not correct :(";

export type InputValidityChecker = {
  checker: (value?: string, value2?: string) => boolean;
  errorMessage: string;
};

export type Props = {
  id: string;
  label: string;
  name: string;
  type: "text" | "email" | "password" | "radio" | "number";
  placeholder: string;
  required?: boolean;
  // validFeedBack?: string;
  // invalidFeedBack?: string;
  defaultValue?: string;
  regexp?: string;
  disabled?: boolean;
  value?: string;

  onInputChange?: (newValue: string) => void;

  validityChecker?: InputValidityChecker;
};
export default function FormInputGroup({
  id,
  label,
  name,
  type,
  placeholder = "",
  required = false,
  // validFeedBack = DEFAULT_VALID_FEEDBACK,
  // invalidFeedBack = DEFAULT_INVALID_FEEDBACK,
  defaultValue = "",
  regexp = ".*",
  disabled = false,
  value,

  onInputChange,
  validityChecker = {
    checker: () => true,
    errorMessage: DEFAULT_INVALID_FEEDBACK,
  },
}: Props) {
  // Use context
  const passwordContext = useContext(AuthForm.PasswordContext);

  // Use state
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  const [invalidFeedBack, setInvalidFeedBack] = useState<string>(
    DEFAULT_INVALID_FEEDBACK
  );
  const [validFeedBack] = useState<string>(DEFAULT_VALID_FEEDBACK);

  // Component methods
  const handleInputChange = (event: any) => {
    const input = event.target as HTMLInputElement;
    const value = input.type === "checkbox" ? input.checked : input.value;
    setInputValue(value as string);

    // Update de context value
    if (input.name === "password")
      passwordContext.setPasswordContextValue(value as string);

    // check validity
    if (!validityChecker.checker(value as string)) {
      input.setCustomValidity("wrong");
      setInvalidFeedBack(validityChecker.errorMessage);
      input.form?.classList.add("was-validated");
    } else {
      input.setCustomValidity("");
    }

    if (onInputChange) {
      onInputChange(value as string);
    }
  };

  return (
    <div className="form-item">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name.toLowerCase()}
        className="form-control"
        required={required}
        onChange={handleInputChange}
        value={value ? value : inputValue}
        pattern={regexp}
        disabled={disabled}
      />
      {required && (
        <>
          <div className="valid-feedback">{validFeedBack}</div>
          <div className="invalid-feedback">{invalidFeedBack}</div>
        </>
      )}
    </div>
  );
}
