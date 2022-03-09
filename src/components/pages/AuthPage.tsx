import AuthFrom from "components/AuthFrom";
import {
  createFormResponse,
  FormResponse,
  resetFormResponse,
} from "components/Form";
import SignUpModal from "containers/SignUpModal";
import { UserCredential } from "firebase/auth";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Firebase } from "services/Firebase";
import "./AuthPage.scss";

// export type User = {
//   uid: "string";
//   email: "string";
// };

// Contexts
// export const UserContext = React.createContext({
//   value: "",
//   // eslint-disable-next-line no-unused-vars
//   setValue: (user: User) => {},
// });

export default function AuthPage() {
  // hooks

  // const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  const [formResponse, setFormResponse] = useState<FormResponse>(
    resetFormResponse()
  );

  const handleSubmit = (email: string, secret: string) => {
    const signInExecutor = {
      resolve: (userCredential: UserCredential) => {
        if (userCredential.user.emailVerified) {
          navigate("");
          setFormResponse(resetFormResponse());
        } else {
          setFormResponse(
            createFormResponse(
              "Before login you must use your email link to verify your email address."
            )
          );
        }
      },
      reject: () => {
        setFormResponse(
          createFormResponse(
            "We are sorry! Something wong. Check your internet connection. Otherwise contact our support team please."
          )
        );
      },
    };

    Firebase.signIn(email, secret, signInExecutor);
  };

  //   fetch(process.env.REACT_APP_SERVER_AUTH + "/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: email,
  //       password: hashedPassword,
  //     }),
  //     headers: {
  //       Authorization: "Basic " + hashedPassword,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       return { json: response.json(), status: response.status };
  //     })
  //     .then((result) => {
  //       result.json.then((obj) => {
  //         let formMessage = resetFormResponse();

  //         if (result.status != 200) {
  //           formMessage = createFormResponse(obj.message);
  //         } else {
  //           LocalData.setAccessToken(obj.data.accessToken);
  //           LocalData.setRefreshToken(obj.data.refreshToken);
  //           LocalData.setUser(obj.data.user);
  //
  //           navigate(RoutesTree.ACCOUNT);
  //         }

  //         setFormResponse(formMessage);
  //       });
  //     })
  //     .catch((error) => {
  //       setFormResponse(
  //         createFormResponse(
  //           "We are sorry! Something wong. Check your internet connection. Otherwise contact our support team please."
  //         )
  //       );
  //       console.error(error);
  //     });
  // }

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
          <AuthFrom.Component
            onSubmit={handleSubmit}
            fromResponse={formResponse}
          />
          <Button
            variant="primary"
            type="submit"
            form={AuthFrom.DEFAULT_AUTH_FORM_ID}
          >
            Start
          </Button>
          <hr />
          <SignUpModal />
        </section>
      </main>
    </div>
  );
}
