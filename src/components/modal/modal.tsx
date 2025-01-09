import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[90%] sm:w-[400px] p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BsCheckCircle className="text-green-500 text-2xl" />
            <h2 className="text-xl font-medium text-gray-800">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <p className="text-gray-600 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
