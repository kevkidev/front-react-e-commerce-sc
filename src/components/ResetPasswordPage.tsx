// import "./AuthPage.scss";
import bcrypt from "bcryptjs";
import { Form, FormResponse } from "components/Form";
import FormInputGroup from "components/FormInputGroup";
import React, { useEffect, useState } from "react";

export default function ResetPasswordPage() {
  const [formResponse, setFormResponse] = useState<FormResponse>({
    message: "",
    level: "danger",
    display: "none",
  });

  const [userEmail] = useState(() => {
    const email = window.localStorage.getItem("emailForSignIn");
    return email ? email : "";
  });

  const handleSubmit = (form: FormData) => {
    const email = form.get("email");

    if (!email) throw "Oops! Email is not defined!";

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync("password", salt);

    fetch(process.env.REACT_APP_SERVER_AUTH + "/reset-password", {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        url: window.location.href,
        password: hashedPassword,
      }),
      headers: {
        // Authorization:
        //   "Basic " +
        //   Buffer.from(userEmail + ":" + window.location.href, "base64"),
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Clear email from storage.
        // window.localStorage.removeItem("emailForSignIn");
      })
      .catch((error) => {
        setFormResponse({
          message: error,
          level: "danger",
          display: "block",
        });
        console.error(error);
      });
  };

  useEffect(() => {});

  return (
    <div className="auth-page">
      <header>
        <h1>Fake Demo Social Network</h1>
        <p>Account management.</p>
      </header>

      <main>
        <section className="connection">
          <h2>Create your password</h2>
          <p className="info-text">
            <i className="bi bi-info-circle-fill"></i> This form is not plugged
            to a serveur such use the &quot;Use API login&quot;.
          </p>
          <Form
            id="connection-form"
            onSubmit={handleSubmit}
            formResponse={formResponse}
          >
            <FormInputGroup
              id="connection-email"
              label="Email"
              name="email"
              type="email"
              placeholder="Your email please"
              required={true}
              regexp="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
              // invalidFeedBack="Please check your email please."
              value={userEmail}
              disabled
            />
            <FormInputGroup
              id="connection-password"
              label="Password"
              name="password"
              type="password"
              placeholder="Your password please"
              required={true}
              // invalidFeedBack="Please check your password"
            />

            <div className="button-group">
              <button className="btn btn-primary" form="connection-form">
                Enter
              </button>
            </div>
          </Form>
        </section>
      </main>
    </div>
  );
}
