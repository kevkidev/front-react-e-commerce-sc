import { RoutePath } from "main/RoutePath";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Props {
  message?: string;
}

export function DefaultError(props: Props) {
  const { message } = props;
  const navigate = useNavigate();

  return (
    <Alert variant="danger" className="DefaultError">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        {message && message}
        <Button
          onClick={() => {
            navigate(RoutePath.root);
          }}
        ></Button>
        {/* <NavLink to={RoutePath.root}>Return</NavLink> */}
      </p>
    </Alert>
  );
}
