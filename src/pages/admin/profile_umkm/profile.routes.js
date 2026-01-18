import { ProfileDataList } from "./ProfileDataList";
import { ProfileFormControl } from "./ProfileFormControl";

export const profileRoutes = {
  path: "profile-umkm",
  children: [
    {
      index: true,
      Component: ProfileDataList,
    },
    {
      path: "update",
      Component: ProfileFormControl,
    },
  ],
};
