import React, { } from "react";
import './AuthPage.scss';
import FormInputGroup from "./FormInputGroup";
import SignUpModal from "./SignUpModal";
import Form from "./Form";

export default function AuthPage() {
    return <div className="auth-page">

        <header>
            <h1>Fake Demo Social Network</h1>
            <p>Log in or Create an new account.</p>
        </header>

        <main>
            <section>
                <h2>Recent logins</h2>
                <div className="recent-logins">
                    <div className="account">
                        <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/98/000000/external-human-shopping-prettycons-lineal-prettycons.png" className="rounded float-start" alt="..."></img>
                        <span>Jean-Luc Mouche</span>
                    </div>
                    <div className="account">
                        <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/98/000000/external-human-shopping-prettycons-lineal-prettycons.png" className="rounded float-start" alt="..."></img>
                        <span>Jean-Luc Mouche</span>
                    </div>
                    <div className="account">
                        <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/98/000000/external-human-shopping-prettycons-lineal-prettycons.png" className="rounded float-start" alt="..."></img>
                        <span>Jean-Luc Mouche</span>
                    </div>
                </div>
            </section>
            <section className="connection">
                <h2>Connection</h2>
                <Form id="connection-form">
                    <FormInputGroup id="connection-email" label="Email" name="email" type="email" placeholder="Your email please" required={true} invalidFeedBack="Enter your email please." />
                    <FormInputGroup id="connection-paswword" label="Password" name="password" type="password" placeholder="Your password please" required={true} invalidFeedBack="Please check your password" />

                    <div className="form-item-self">
                        <a href="">What is my password ?</a>
                    </div>
                    <button type="submit" className="btn btn-primary">Enter</button>
                </Form>
                <hr />
                <SignUpModal />
            </section>
        </main>

        <a href="https://icons8.com/icon/rQhegPBWudLy/human">Human icon by Icons8</a>
    </div >;
}