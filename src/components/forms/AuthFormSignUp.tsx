import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { AuthService } from "services/AuthService";
import { Auth, FormResponse, FormResponseLevel } from "types/types.d";
import { AuthForm } from "./AuthForm";
import { FormResponseMessageUtil } from "./FormResponseMessage";

interface Props {
  onFormSent: (value: boolean) => void;
}

export function AuthFormSignUp({ onFormSent }: Props) {
  const [formResponse, setFormResponse] = useState<FormResponse>(
    FormResponseMessageUtil.defaultFormResponse
  );

  const handleSubmit: SubmitHandler<Auth> = ({ email, password }: Auth) => {
    const handleSuccess = (message: string, level: FormResponseLevel) => {
      setFormResponse(FormResponseMessageUtil.buildResponse(message, level));
      onFormSent(true);
    };

    const setMessage = (message: string) => {
      setFormResponse(FormResponseMessageUtil.buildResponse(message));
    };

    AuthService.signUp({
      email,
      password,
      callback: {
        onFail: setMessage,
        onEmailAlready: setMessage,
        onSuccess: handleSuccess,
      },
    });
  };

  return (
    <>
      <AuthForm onSend={handleSubmit} formResponse={formResponse} asSignUp />
    </>
  );
}
