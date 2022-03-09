import { Modal as RBModal } from "react-bootstrap";

type Props = {
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  shown: boolean;
  onHide: () => void;
};

export function Modal({ title, children: body, footer, shown, onHide }: Props) {
  return (
    <div className="Modal">
      <RBModal
        show={shown}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
        centered
      >
        <RBModal.Header closeButton>
          <RBModal.Title>{title}</RBModal.Title>
        </RBModal.Header>
        <RBModal.Body>{body}</RBModal.Body>
        <RBModal.Footer>{footer}</RBModal.Footer>
      </RBModal>
    </div>
  );
}
