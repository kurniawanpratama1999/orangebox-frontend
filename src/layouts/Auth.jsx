import { UiNavbarGeneral } from "@/components/UiNavbar";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <>
      <UiNavbarGeneral />
      <Outlet />
    </>
  );
};
