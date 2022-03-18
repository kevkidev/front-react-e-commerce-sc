import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Auth, FormResponse } from "types/types.d";
import {
  AUTH_EMAIL_ID,
  AUTH_FORM_ID_SIGN_IN,
  AUTH_FORM_ID_SIGN_UP,
  AUTH_PASSWORD_CONFIRM_ID,
  AUTH_PASSWORD_ID,
  schema,
} from "./AuthFormConfig";
import { FormResponseMessage } from "./FormResponseMessage";

interface Props {
  onSend: SubmitHandler<Auth>;
  formResponse: FormResponse;
  hasSubmitButton?: boolean;
  asSignUp?: boolean;
}

export function AuthForm2(props: Props) {
  const { onSend, formResponse, asSignUp, hasSubmitButton } = props;
  const [formId] = useState(
    asSignUp ? AUTH_FORM_ID_SIGN_UP : AUTH_FORM_ID_SIGN_IN
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form id={formId} onSubmit={handleSubmit(onSend)}>
        {/* email */}
        <div className="form-item">
          <label htmlFor={AUTH_EMAIL_ID} className="form-label">
            Email
          </label>

          <input
            {...register("email")}
            id={AUTH_EMAIL_ID}
            className="form-control"
            type="email"
            defaultValue=""
            placeholder="Your email please"
          />
          <div className="text-danger mt-2">{errors.email?.message}</div>
        </div>
        {/* password */}
        <div className="form-item">
          <label htmlFor={AUTH_PASSWORD_ID} className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            id={AUTH_PASSWORD_ID}
            className="form-control"
            type="password"
            defaultValue=""
            placeholder="Your password please"
          />
          <div className="text-danger mt-2">{errors.password?.message}</div>
        </div>
        <input
          {...register("signUp")}
          type="hidden"
          defaultValue={asSignUp ? "true" : "false"}
        />
        {asSignUp && (
          <div className="form-item">
            <label htmlFor={AUTH_PASSWORD_CONFIRM_ID} className="form-label">
              Confirm the password
            </label>
            <input
              {...register("passwordConfirm")}
              id={AUTH_PASSWORD_CONFIRM_ID}
              className="form-control"
              type="password"
              defaultValue=""
              placeholder="Your password again please"
              form={formId}
            />
            <div className="text-danger mt-2">
              {errors.passwordConfirm?.message}
            </div>
          </div>
        )}

        {/* message */}
        <FormResponseMessage formResponse={formResponse} />

        {hasSubmitButton && (
          <Button variant="primary" type="submit" form={formId}>
            Sign In
          </Button>
        )}
      </form>
    </>
  );
}
