import { Button } from "react-bootstrap";

type Props = {
  onHide: () => void;
  onReset: Function;
  action: string;
  formId: string;
};

export function ModalFooterForm({ onHide, onReset, action, formId }: Props) {
  return (
    <>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button
        variant="secondary"
        onMouseDown={() => {
          onReset(false);
        }}
        onMouseUp={() => {
          onReset(true);
        }}
      >
        Reset
      </Button>
      <Button variant="primary" type="submit" form={formId}>
        {action[0].toUpperCase()}
        {action.slice(1)}
      </Button>
    </>
  );
}
