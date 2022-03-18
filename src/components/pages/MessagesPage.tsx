import { AuthHook } from "components/hooks/AuthHook";
import { Page } from "components/pages/Page";

export function MessagesPage() {
  const logged = AuthHook.useLoggedEffect(true);

  return (
    <>
      {logged && (
        <Page>
          <h1>Messages</h1>
          <p>Some messages</p>
        </Page>
      )}
    </>
  );
}
