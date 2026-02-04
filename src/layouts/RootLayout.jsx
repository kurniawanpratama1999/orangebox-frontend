import { ModalProvider } from "@/context/ModalContext.jsx";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
    </>
  );
};
