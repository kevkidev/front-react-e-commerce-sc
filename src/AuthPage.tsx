import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./AuthPage.scss";
import Form from "./Form";
import FormInputGroup from "./FormInputGroup";
import SignUpModal from "./SignUpModal";

export default function AuthPage() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

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
          <Form id="connection-form">
            <FormInputGroup
              id="connection-email"
              label="Email"
              name="email"
              type="email"
              placeholder="Your email please"
              required={true}
              invalidFeedBack="Enter your email please."
            />
            <FormInputGroup
              id="connection-paswword"
              label="Password"
              name="password"
              type="password"
              placeholder="Your password please"
              required={true}
              invalidFeedBack="Please check your password"
            />
            <div className="form-item-self">
              <a href="">What is my password ?</a>
            </div>
          </Form>
          <div className="button-group">
            <button
              // className="btn btn-primary g-recaptcha"
              className="btn btn-primary"
              form="connection-form"
              // data-sitekey={process.env.REACT_APP_RECAPTCHA_CLIENT_KEY}
              // data-callback="onSubmit"
              // data-action="submit"
            >
              Enter
            </button>
            <button
              className="btn btn-primary"
              onClick={() => loginWithRedirect()}
            >
              Use API Log In/Sign Up
            </button>
          </div>
          <hr />
          <SignUpModal />
        </section>
      </main>

      {isLoading && <div>Loading ...</div>}
      {!isLoading && isAuthenticated && user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}

      <button
        onClick={() =>
          logout({
            returnTo:
              window.location.origin + "/" + process.env.REACT_APP_APP_NAME,
          })
        }
      >
        Log Out
      </button>
      <a href="https://icons8.com/icon/rQhegPBWudLy/human">
        Human icon by Icons8
      </a>
    </div>
  );
}
