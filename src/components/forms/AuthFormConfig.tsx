import { Auth } from "types/types.d";
import { boolean, object, ref, SchemaOf, string } from "yup";

const MESSAGE_EMAIL = "Check your email please.";
const MESSAGE_PASSWORD_SECURITY =
  "Sorry. Your password is not enough strong : at least 8 characters, one number, one special character.";
const MESSAGE_PASSWORD_CONFIRM_BAD = "Passwords must match.";
const MESSAGE_PASSWORD_CONFIRM_EMPTY = "Please, enter the password again.";

const REGEXP_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const EMPTY_STRING = "";

const REF_PASSWORD = "password";
const REF_SIGN_UP = "signUp";

export const schema: SchemaOf<Auth> = object({
  email: string()
    .trim()
    .email(MESSAGE_EMAIL)
    .required(MESSAGE_EMAIL)
    .default(EMPTY_STRING),
  password: string()
    .trim()
    .matches(REGEXP_PASSWORD, MESSAGE_PASSWORD_SECURITY)
    .required()
    .default(EMPTY_STRING),
  signUp: boolean().default(false),
  passwordConfirm: string().when([REF_SIGN_UP, REF_PASSWORD], {
    is: (signUp: boolean) => signUp,
    then: (schema) =>
      schema
        .oneOf([ref(REF_PASSWORD)], MESSAGE_PASSWORD_CONFIRM_BAD)
        .required(MESSAGE_PASSWORD_CONFIRM_EMPTY)
        .default(EMPTY_STRING),
  }),
}).required();

export const emptyAuth: Auth = {
  email: EMPTY_STRING,
  password: EMPTY_STRING,
  passwordConfirm: EMPTY_STRING,
  signUp: false,
};
export const AUTH_FORM_ID_SIGN_IN = "auth-form-sign-in";
export const AUTH_FORM_ID_SIGN_UP = "auth-form-sign-up";
export const AUTH_EMAIL_ID = "auth-email";
export const AUTH_PASSWORD_ID = "auth-password";
export const AUTH_PASSWORD_CONFIRM_ID = "auth-password-confirm";
