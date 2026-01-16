import { MerchantFormControl } from "./MerchantFormControl";
import { MerchantDataList } from "./MerchantDataList";

export const merchantRoutes = {
  path: "merchant",
  children: [
    {
      index: true,
      Component: MerchantDataList,
    },
    {
      path: "create",
      Component: MerchantFormControl,
    },
    {
      path: ":id/update",
      Component: MerchantFormControl,
    },
  ],
};
