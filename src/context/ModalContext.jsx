import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UiAlert } from "@/components/UiAlert.jsx";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, SetDescription] = useState(null);
  const [type, setType] = useState(null);

  const navigate = useNavigate();

  const handler = {
    openModal(description, option = { type: "success", navigate: null }) {
      SetDescription(description);

      setType(option.type);

      if (option.navigate) {
        setTimeout(() => {
          navigate(option.navigate);
          setIsOpen(false);
        }, 1000);
      }

      setIsOpen(true);
    },

    closeModal(option = { navigate: null }) {
      if (option.navigate) {
        navigate(option.navigate);
      }

      setIsOpen(false);
    },
  };

  return (
    <ModalContext.Provider value={{ handler }}>
      {children}

      {isOpen && (
        <>
          <div
            onClick={handler.closeModal}
            className="fixed z-101 top-0 left-0 bottom-0 right-0 flex justify-center items-start bg-black/20"></div>
          <div className="fixed z-102 top-5 left-1/2 -translate-x-1/2 w-full max-w-md px-2">
            <UiAlert description={description} type={type} />
          </div>
        </>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
