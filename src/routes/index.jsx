import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { Home } from "@/pages/audience/Home";
import { AuthLayout } from "@/layouts/Auth";
import { Login } from "@/pages/auth/Login";
import { AdminLayout } from "@/layouts/Admin";
import { UserListTable } from "@/pages/admin/user/ListTable";
import { UserFormInput } from "@/pages/admin/user/FormInput";
import { AudienceLayout } from "@/layouts/Audience";
import { NotFound } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AudienceLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      {
        path: "login",
        Component: Login,
      },
    ],
  },

  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, element: <Navigate to="user" replace /> },
      {
        path: "user",
        children: [
          {
            index: true,
            Component: UserListTable,
          },
          {
            path: "update",
            Component: UserFormInput,
          },
        ],
      },
    ],
  },

  { path: "*", Component: NotFound },
]);
