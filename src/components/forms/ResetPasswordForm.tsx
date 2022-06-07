// import "./AuthPage.scss";
import bcrypt from "bcryptjs";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FormResponse } from "types/types.d";

//@todo : migrate to react form hook + integrate
export default function ResetPasswordForm() {
  const [, setFormResponse] = useState<FormResponse>({
    message: "",
    level: "danger",
    display: "none",
  });

  const [userEmail] = useState(() => {
    const email = window.localStorage.getItem("emailForSignIn");
    return email ? email : "";
  });

  const handleSubmit = () => {
    const email = "email";

    if (!email) throw "Oops! Email is not defined!";

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync("password", salt);

    fetch(process.env.REACT_APP_AUTH_SERVICE_URI + "/reset-password", {
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
    <main>
      <Button onClick={handleSubmit}>test</Button>
    </main>
  );
}
