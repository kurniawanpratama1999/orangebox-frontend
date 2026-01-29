import {
  UiList,
  UiListAvatar,
  UiTitleAndSearch,
} from "@/components/UiListTable";
import { useRefreshAxios } from "@/store/useRefreshAxios.js";

import { useEffect, useState } from "react";

export const CategoryDataList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    useRefreshAxios
      .get("/category")
      .then((res) => {
        console.log(res);
        if (res.status == 202) {
          setCategories(res.data.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
