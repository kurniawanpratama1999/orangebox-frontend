import { UiNavbarDashboard } from "@/components/UiNavbar";
import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <>
      <UiNavbarDashboard />
      <Outlet />
    </>
  );
};
