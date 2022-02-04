import { useState } from "react";

export function useModalDisplay() {
  const [showModal, setShowModal] = useState(false);
  return { showModal, setShowModal };
}
