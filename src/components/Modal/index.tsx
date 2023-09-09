import React, { ReactNode, useEffect } from "react";
import Icon from "../Icon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal if clicking outside the modal content
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed z-50 inset-0 flex items-center justify-center modal-overlay bg-black bg-[#00000050] bg-opacity-50"
    >
      <div className="bg-white rounded p-4 shadow-md w-80 max-w-md">
        <button className="float-right" onClick={onClose}>
          <Icon name="clear" />
        </button>
        <div className="my-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
