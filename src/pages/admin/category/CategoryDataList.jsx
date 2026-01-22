import {
  UiList,
  UiListAvatar,
  UiTitleAndSearch,
} from "@/components/UiListTable";

import { useDummiesDataStore } from "@/store/dummy";

export const CategoryDataList = () => {
  const categories = useDummiesDataStore.categories;
  return (
    <>
      <UiTitleAndSearch
        title="Categories"
        searchId="q_category"
        placeholder="Cari kategori produk"
      />

      <UiList
        datas={categories}
        renderItems={(category) => (
          <div className="w-full">
            <p className="text-sm font-semibold ">{category.name}</p>
            <p className="text-xs italic">12 items</p>
          </div>
        )}>
        <UiListAvatar />
        {/* ===== RENDER_ITEMS ===== */}
      </UiList>
    </>
  );
};
