import { AuthProvider } from "@/context/AuthContext.jsx";
import { ModalProvider } from "@/context/ModalContext.jsx";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
    </AuthProvider>
  );
};
