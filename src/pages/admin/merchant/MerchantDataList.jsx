import {
  UiList,
  UiListAvatar,
  UiTitleAndSearch,
} from "@/components/UiListTable";
import { useDummiesDataStore } from "@/store/dummy";

export const MerchantDataList = () => {
  const merchants = useDummiesDataStore.merchants;
  return (
    <>
      <UiTitleAndSearch
        title="Merchants"
        searchId="q_merchant"
        placeholder="Cari merchant"
      />

      <UiList
        datas={merchants}
        renderItems={(merchant) => (
          <div className="text-orange-800">
            <p className="text-sm font-semibold ">{merchant.name}</p>
            <p className="text-xs italic">{merchant.desc}</p>
          </div>
        )}>
        <UiListAvatar />
        {/* ===== RENDER_ITEMS ===== */}
      </UiList>
    </>
  );
};
