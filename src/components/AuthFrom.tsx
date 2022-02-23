import React, { useState } from "react";
import { Form, FormResponse } from "./Form";
import FormInputGroup, { InputValidityChecker } from "./FormInputGroup";

export namespace AuthForm {
  export const DEFAULT_AUTH_FORM_ID = "auth-form";

  export const PasswordContext = React.createContext({
    passwordContextValue: "",
    // eslint-disable-next-line no-unused-vars
    setPasswordContextValue: (password: string) => {},
  });

  type Props = {
    // eslint-disable-next-line no-unused-vars
    onSubmit: (email: string, password: string) => void;
    // formResponseState: [fromResponse: FormResponse, setFromResponse: Function];
    fromResponse: FormResponse;
    // children?: React.ReactNode;
    passwordChecker?: InputValidityChecker;
    hasPasswordConfirm?: boolean;
    formId?: string;
  };

  export function Component({
    onSubmit,
    fromResponse,
    hasPasswordConfirm = false,
    formId = DEFAULT_AUTH_FORM_ID,
  }: Props) {
    const [passwordContextValue, setPasswordContextValue] = useState("");

    const passwordValue = {
      passwordContextValue,
      setPasswordContextValue,
    };

    const passwordConfirmChecker: InputValidityChecker = {
      checker: (password) => {
        return (password && passwordContextValue === password) as boolean;
      },
      errorMessage:
        "Sorry. The confirmation password must be the same as password.",
    };

    const passwordChecker: InputValidityChecker = {
      checker: (password) => {
        // more secure regex password must be :
        // more than 8 chars
        // at least one uppercase char
        // at least one number
        // at least one special character
        const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return (password && regexp.test(password)) as boolean;
      },
      errorMessage:
        "Sorry. Your password is not enough strong : at least 8 characters, one number, one special character.",
    };

    const emailChecker: InputValidityChecker = {
      checker: (email) => {
        const regexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
        return regexp.test(email);
      },
      errorMessage: "Check your email please.",
    };

    const handleSubmit = (form: FormData) => {
      const email = form.get("email") as string;
      const password = form.get("password") as string;
      onSubmit(email, password);
    };

    return (
      <Form id={formId} onSubmit={handleSubmit} formResponse={fromResponse}>
        <FormInputGroup
          id="auth-email"
          label="Email"
          name="email"
          type="email"
          placeholder="Your email please"
          required={true}
          regexp="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
          // invalidFeedBack={_emailInvalidFeedBack}
          validityChecker={emailChecker}
        />
        <PasswordContext.Provider value={passwordValue}>
          <FormInputGroup
            id="auth-password"
            label="Password"
            name="password"
            type="password"
            placeholder="Your password please"
            required={true}
            // invalidFeedBack={_passwordInvalidFeedBack}
            validityChecker={passwordChecker}
          />
        </PasswordContext.Provider>
        {hasPasswordConfirm && (
          <FormInputGroup
            id="auth-password-confirm"
            label="Confirm the password"
            name="password-confirm"
            type="password"
            placeholder="Your password again please"
            required={true}
            // invalidFeedBack={_passwordInvalidFeedBack}
            validityChecker={passwordConfirmChecker}
          />
        )}
      </Form>
    );
  }
}
export default AuthForm;
