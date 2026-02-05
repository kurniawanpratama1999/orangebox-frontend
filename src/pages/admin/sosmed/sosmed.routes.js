import { SosmedFormControl } from "./SosmedFormControl";
import { SosmedDataList } from "./SosmedDataList";

export const sosmedRoutes = {
  path: "sosmed",
  children: [
    {
      index: true,
      Component: SosmedDataList,
    },
    {
      path: "create",
      Component: SosmedFormControl,
    },
    {
      path: ":id/update",
      Component: SosmedFormControl,
    },
  ],
};
