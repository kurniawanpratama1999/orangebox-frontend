import { createBrowserRouter, Navigate } from "react-router";
/* LAYOUTS */
import { AuthLayout } from "@/layouts/Auth";
import { AdminLayout } from "@/layouts/Admin";
import { AudienceLayout } from "@/layouts/Audience";

/* PAGES */
import { Home } from "@/pages/audience/Home";
import { Menu } from "@/pages/audience/Menu";
import { Login } from "@/pages/auth/Login";

/* NOTFOUND PAGES */
import { NotFound } from "@/pages/NotFound";

/* ROUTINGS */
import { userRoutes } from "@/pages/admin/user/user.routes";
import { categoryRoutes } from "@/pages/admin/category/category.routes";
import { productRoutes } from "@/pages/admin/product/product.routes";
import { testimoniRoutes } from "@/pages/admin/testimoni/testimoni.routes";
import { merchantRoutes } from "@/pages/admin/merchant/merchant.routes";
import { profileRoutes } from "@/pages/admin/profile_umkm/profile.routes";
import { MenuLayout } from "@/layouts/Menu";

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
  {
    path: "/menu",
    Component: MenuLayout,
    children: [
      {
        index: true,
        Component: Menu,
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
      userRoutes,

      // CATEGORIES
      categoryRoutes,

      // PRODUCTS
      productRoutes,

      // TESTIMONI
      testimoniRoutes,

      // MERCHANT
      merchantRoutes,

      // PROFILE UMKM
      profileRoutes,
    ],
  },

  { path: "*", Component: NotFound },
]);
