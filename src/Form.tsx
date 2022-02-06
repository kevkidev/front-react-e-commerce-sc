import React from "react";
import "./AuthPage.scss";

declare const grecaptcha: any;

type Props = {
  id: string;
  children: any;
};

export default function AuthPage({ id, children }: Props) {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.target;
    if (form.checkValidity()) {
      _sendReCaptcha();
      alert(
        "Sorry this a demo log in/sign in form. Click on 'Use API to login'!"
      );
    }
    form.classList.add("was-validated");
  };

  const _sendReCaptcha = () => {
    grecaptcha.ready(function () {
      const key = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
      grecaptcha
        .execute(key, { action: "submit" })
        .then(function (token: string) {
          // Add your logic to submit to your backend server here.
          alert("reCaptcha Token has send to server!:" + token);
        });
    });
  };

  return (
    <form
      id={id}
      className="g-3 needs-validation"
      onSubmit={handleSubmit}
      noValidate
    >
      {children}
    </form>
  );
}
