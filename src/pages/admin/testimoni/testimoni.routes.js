import { TestimoniDataList } from "./TestimoniDataList";
import { TestimoniFormControl } from "./TestimoniFormControl";

export const testimoniRoutes = {
  path: "testimoni",
  children: [
    {
      index: true,
      Component: TestimoniDataList,
    },
    {
      path: "create",
      Component: TestimoniFormControl,
    },
    {
      path: ":id/update",
      Component: TestimoniFormControl,
    },
  ],
};
