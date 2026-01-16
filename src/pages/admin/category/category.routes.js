import { CategoryFormControl } from "./CategoryFormControl";
import { CategoryDataList } from "./CategoryDataList";

export const categoryRoutes = {
  path: "category",
  children: [
    {
      index: true,
      Component: CategoryDataList,
    },
    {
      path: "create",
      Component: CategoryFormControl,
    },
    {
      path: ":id/update",
      Component: CategoryFormControl,
    },
  ],
};
