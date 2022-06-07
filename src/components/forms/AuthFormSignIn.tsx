import { RoutePath } from "main/RoutePath";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "services/AuthService";
import { Auth, FormResponse } from "types/types.d";
import { AuthForm } from "./AuthForm";
import { FormResponseMessageUtil } from "./FormResponseMessage";

export function AuthFormSignIn() {
  const [formResponse, setFormResponse] = useState<FormResponse>(
    FormResponseMessageUtil.defaultFormResponse
  );

  const navigate = useNavigate();

  const handleSubmit = ({ email, password }: Auth) => {
    const handleFail = () => {
      setFormResponse(
        FormResponseMessageUtil.buildResponse("Wrong credentials.")
      );
    };

    const handleEmailNotVerified = () => {
      setFormResponse(
        FormResponseMessageUtil.buildResponse(
          "Before login you must use your email link to verify your email address."
        )
      );
    };

    const handleSuccess = () => {
      setFormResponse(FormResponseMessageUtil.defaultFormResponse);
      navigate(RoutePath.sellCatalogs);
    };
    AuthService.signIn({
      email,
      password,
      callback: {
        onSuccess: handleSuccess,
        onEmailNotVerified: handleEmailNotVerified,
        onFail: handleFail,
      },
    });
  };

  return (
    <>
      <AuthForm
        onSend={handleSubmit}
        formResponse={formResponse}
        hasSubmitButton
      />
    </>
  );
}
