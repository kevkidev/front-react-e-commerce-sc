import { useState } from "react";
import AuthForm from "./AuthFrom";
import "./AuthPage.scss";
import { FormResponse, resetFormResponse } from "./Form";
import SignUpModal from "./SignUpModal";

export default function AuthPage() {
  const handleSubmit = () => {
    sendRequestToken();
  };

  function sendRequestToken() {
    fetch(process.env.REACT_APP_SERVER_AUTH + "/login", {
      method: "POST",
      body: JSON.stringify({
        username: "kev",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.cookie = `accessToken=${data.accessToken}`;
        document.cookie = `refreshToken=${data.refreshToken}`;
        alert("Welcome ");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // eslint-disable-next-line no-unused-vars
  const [fromResponse, setFromResponse] = useState<FormResponse>(
    resetFormResponse()
  );
  // const handleSignUpSubmit = (form: FormData) => {
  //   const email = form.get("email");
  //   if (!email) throw "Oops! Email is not defined!";

  //   fetch(process.env.REACT_APP_SERVER_AUTH + "/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       document.cookie = `accessToken=${data.accessToken}`;
  //       document.cookie = `refreshToken=${data.refreshToken}`;
  //       console.log(data[0].message);
  //       // _showToast();
  //       window.localStorage.setItem(
  //         "emailForSignIn",
  //         data[0].data.emailForSignIn
  //       );
  //       setSignupResponse({
  //         message: data[0].message,
  //         level: "success",
  //         display: { display: "block" },
  //       });
  //     })
  //     .catch((error) => {
  //       setSignupResponse({
  //         message: "Sorry! The service is not able to treat your email.",
  //         level: "success",
  //         display: { display: "block" },
  //       });
  //       console.error(error);
  //     });
  // };

  return (
    <div className="auth-page">
      <header>
        <h1>Fake Demo Social Network</h1>
        <p>Log in or Create an new account.</p>
      </header>

      <main>
        <section>
          <h2>Recent logins</h2>

          <div className="recent-logins">
            <div className="account">
              <img
                src="https://img.icons8.com/external-prettycons-lineal-prettycons/98/000000/external-human-shopping-prettycons-lineal-prettycons.png"
                className="rounded float-start"
                alt="..."
              ></img>
              <span>Jean-Luc Mouche</span>
            </div>
            <div className="account">
              <img
                src="https://img.icons8.com/external-prettycons-lineal-prettycons/98/000000/external-human-shopping-prettycons-lineal-prettycons.png"
                className="rounded float-start"
                alt="..."
              ></img>
              <span>Jean-Luc Mouche</span>
            </div>
            <div className="account">
              <img
                src="https://img.icons8.com/external-prettycons-lineal-prettycons/98/000000/external-human-shopping-prettycons-lineal-prettycons.png"
                className="rounded float-start"
                alt="..."
              ></img>
              <span>Jean-Luc Mouche</span>
            </div>
          </div>
        </section>
        <section className="connection">
          <h2>Connection</h2>
          <p className="info-text">
            <i className="bi bi-info-circle-fill"></i> This form is not plugged
            to a serveur such use the &quot;Use API login&quot;.
          </p>
          <AuthForm onSubmit={handleSubmit} fromResponse={fromResponse} />
          <hr />
          <SignUpModal />
        </section>
      </main>
    </div>
  );
}
