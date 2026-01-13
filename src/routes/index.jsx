import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { Home } from "@/pages/audience/Home";
import { AuthLayout } from "@/layouts/Auth";
import { Login } from "@/pages/auth/Login";
import { AdminLayout } from "@/layouts/Admin";
import { UserListTable } from "@/pages/admin/user/ListTable";
import { UserFormInput } from "@/pages/admin/user/FormInput";
import { AudienceLayout } from "@/layouts/Audience";
import { NotFound } from "@/pages/NotFound";
import { ProductListTable } from "@/pages/admin/product/ListTable";

export const router = createBrowserRouter([
  // GLOBAL
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

  // LOGIN
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

  // ADMIN
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, element: <Navigate to="user" replace /> },

      // USERS
      {
        path: "user",
        children: [
          {
            index: true,
            Component: UserListTable,
          },
          {
            path: "create",
            Component: UserFormInput,
          },
          {
            path: ":id/update",
            Component: UserFormInput,
          },
        ],
      },

      // PRODUCTS
      {
        path: "product",
        children: [
          {
            index: true,
            Component: ProductListTable,
          },
          {
            path: "create",
            Component: UserFormInput,
          },
          {
            path: ":id/update",
            Component: UserFormInput,
          },
        ],
      },
    ],
  },

  { path: "*", Component: NotFound },
]);
