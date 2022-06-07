import { Button } from "react-bootstrap";

type Props = {
  onHide: () => void;
  onReset?: Function;
  actionTitle: string;
  formId: string;
  hideSubmitButton?: boolean;
};

export function ModalFooterForm(props: Props) {
  const { onHide, onReset, actionTitle, formId, hideSubmitButton } = props;
  const buttonName = actionTitle[0].toUpperCase() + actionTitle.slice(1);

  return (
    <>
      <Button variant="secondary" onClick={onHide}>
        {hideSubmitButton ? "Close" : "Cancel"}
      </Button>
      {onReset && (
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
      )}
      <Button
        variant="primary"
        type="submit"
        form={formId}
        style={{ display: hideSubmitButton ? "none" : "block" }}
      >
        {buttonName}
      </Button>
    </>
  );
}
