import { UserFormControl } from "./UserFormControl";
import { UserDataList } from "./UserDataList";

export const userRoutes = {
  path: "user",
  children: [
    {
      index: true,
      Component: UserDataList,
    },
    {
      path: "create",
      Component: UserFormControl,
    },
    {
      path: ":id/update",
      Component: UserFormControl,
    },
  ],
};
