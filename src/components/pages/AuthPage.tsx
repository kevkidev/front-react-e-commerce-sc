import { AuthFormSignIn } from "components/forms/AuthFormSignIn";
import { useModalDisplay } from "components/hooks/ModalHook";
import { MakeModalFormSignUp } from "components/modals/MakeModalFormSignUp";
import { Button } from "react-bootstrap";
import "./AuthPage.scss";

export type User = {
  uid: "string";
  email: "string";
};

export default function AuthPage() {
  const { showModal, setShowModal } = useModalDisplay();

  return (
    <main className="container AuthPage">
      <header>
        <h1>Fake Demo React e-commerce</h1>
        <p>Sign In or Sign Up by creating an new account.</p>
      </header>
      <section className="AuthPage__form">
        <h2>Connection</h2>
        <p className="info-text">
          <i className="bi bi-info-circle-fill"></i> Please, use a disposable
          email address as <a href="https://yopmail.com/">yopmail.com</a> to
          create an account. Do not use your real email address. This is a demo
          website.
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
  );
}
