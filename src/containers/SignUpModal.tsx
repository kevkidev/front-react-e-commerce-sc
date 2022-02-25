import AuthForm from "components/AuthFrom";
import {
  createFormResponse,
  FormResponse,
  resetFormResponse,
} from "components/Form";
import "containers/AuthPage.scss";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function SignUpModal() {
  const [show, setShow] = useState(false);
  const [formResponse, setFormResponse] = useState<FormResponse>(
    resetFormResponse()
  );
  const [submitButtonDisplay, setSubmitButtonDisplay] = useState<
    "block" | "none"
  >("block");

  const handleShow = () => {
    setShow(true);
    setSubmitButtonDisplay("block");
  };

  const handleClose = () => {
    setFormResponse(resetFormResponse());
    setShow(false);
  };

  const handleSubmit = (email: string, hashedPassword: string) => {
    fetch(process.env.REACT_APP_SERVER_AUTH + "/signUp", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: hashedPassword,
      }),
      headers: {
        Authorization: "Basic " + hashedPassword,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return { json: response.json(), status: response.status };
      })
      .then((result) => {
        result.json.then((data) => {
          window.localStorage.setItem("user", data.data.user);
          let formMessage = resetFormResponse();

          if (result.status != 200) {
            formMessage = createFormResponse(
              "Oops! You already have an account with this email. Go to login or reset your password please."
            );
            console.error(data.message);
          } else {
            formMessage = createFormResponse(
              data.message + "You can close this modal",
              "success"
            );
            setSubmitButtonDisplay("none");
          }

          setFormResponse(formMessage);
        });
      })
      .catch((error) => {
        setFormResponse(
          createFormResponse(
            "We are sorry! Something wong. Check your internet connection. Otherwise contact our support team please."
          )
        );
        console.error(error);
      });
  };

  const formId = "sign-up-form";
  return (
    <div className="sign-up-modal">
      <Button variant="success" onClick={handleShow}>
        Create an account
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AuthForm.Component
            onSubmit={handleSubmit}
            fromResponse={formResponse}
            hasPasswordConfirm={true}
            formId={formId}
          />
          <p>By clicking Start, you agree to our Terms.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            form={formId}
            style={{ display: submitButtonDisplay }}
          >
            Start
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
