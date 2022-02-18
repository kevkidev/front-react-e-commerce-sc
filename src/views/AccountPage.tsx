// import "./AccountPage.scss";

import { useContext } from "react";
import { Auth } from "../components/AuthContainer";

export default function AccountPage() {
  const logged = useContext(Auth.IsLoggedContext).logged;
  return (
    <Auth.Container>
      {/* <Auth.AnonymousContent>
        <p>Nothing to see</p>
      </Auth.AnonymousContent>
      <Auth.SignedContent>
        
      </Auth.SignedContent> */}
      {logged ? (
        <div>
          <h1>My Account</h1>
        </div>
      ) : (
        <p>Nothing to see for you</p>
      )}
    </Auth.Container>
  );
}
