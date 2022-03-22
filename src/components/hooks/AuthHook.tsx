import { RoutePath } from "main/RoutePath";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "services/AuthService";
import { AppUser } from "types/types.d";

/**
 * You need it for check if the user is logged anymore
 */
export namespace AuthHook {
  /**
   *
   * @param redirect if true then redirect to AuthPage
   * @returns the user or undefined
   */
  export function useLoggedEffect(redirect: boolean = false) {
    const [logged, setLogged] = useState<AppUser | undefined>(undefined);
    const navigate = useNavigate();

    useEffect(() => {
      AuthService.subscribeToAuthState({
        onLogged: (user: AppUser) => {
          setLogged(user);
        },
        onNotLogged: () => {
          setLogged(undefined);
          redirect && navigate(RoutePath.auth);
        },
      });
    }, []);

    return logged;
  }
}
