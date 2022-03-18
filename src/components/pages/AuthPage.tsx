import { AuthFormSignIn } from "components/forms/AuthFormSignIn";
import { MakeModalFormSignUp } from "components/modals/MakeModalFormSignUp";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./AuthPage.scss";

export type User = {
  uid: "string";
  email: "string";
};

// Contexts
// export const UserContext = React.createContext({
//   value: "",
//   // eslint-disable-next-line no-unused-vars
//   setValue: (user: User) => {},
// });

export default function AuthPage() {
  // hooks
  // @todo : use this hook everywhere
  function useModalDisplay() {
    const [showModal, setShowModal] = useState(false);
    return { showModal, setShowModal };
  }
  const { showModal, setShowModal } = useModalDisplay();

  return (
    <div className="auth-page">
      <header>
        <h1>Fake Demo React e-commerce</h1>
        <p>Sign In or Sign Up by creating an new account.</p>
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
            <i className="bi bi-info-circle-fill"></i> Please, use a disposable
            email address as <a href="https://yopmail.com/">yopmail.com</a> to
            create an account. Do not use your real email address. This is a
            demo website.
          </p>

          <AuthFormSignIn />
          <hr />
          <Button
            variant="success"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Sign Up
          </Button>
          <MakeModalFormSignUp
            shown={showModal}
            onHide={() => setShowModal(false)}
            title="Create your account"
          />
        </section>
      </main>
    </div>
  );
}
