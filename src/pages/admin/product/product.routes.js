import { ProductFormControl } from "./ProductFormControl";
import { ProductDataList } from "./ProductDataList";

export const productRoutes = {
  path: "product",
  children: [
    {
      index: true,
      Component: ProductDataList,
    },
    {
      path: "create",
      Component: ProductFormControl,
    },
    {
      path: ":id/update",
      Component: ProductFormControl,
    },
  ],
};
