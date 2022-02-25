import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Firebase } from "services/Firebase";

export namespace Auth {
  export const IsLoggedContext = React.createContext({
    logged: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setLogged: (value: boolean) => {},
  });

  type Props = {
    children: React.ReactNode;
  };
  export function Container({ children }: Props) {
    const [logged, setLogged] = useState(false);
    const isLoggedContext = {
      logged,
      setLogged,
    };

    useEffect(() => {
      const executor = {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        resolve: (user: User) => setLogged(true),
        reject: () => setLogged(false),
      };
      Firebase.checkAuth(executor);
    }, []);

    return (
      <IsLoggedContext.Provider value={isLoggedContext}>
        {children}
        {/* {logged && { children }}
        {!logged && { anonymousContent }} */}
      </IsLoggedContext.Provider>
    );
  }

  //   export function AnonymousContent({ children }: Props) {
  //     const context = useContext(IsLoggedContext);
  //     return <>{!context.logged && children}</>;
  //   }

  //   export function SignedContent({ children }: Props) {
  //     const context = useContext(IsLoggedContext);
  //     return <>{context.logged && children}</>;
  //   }
}
