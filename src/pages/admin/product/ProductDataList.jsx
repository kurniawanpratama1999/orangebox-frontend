import { UiList, UiTitleAndSearch } from "@/components/UiListTable";
import { useDummiesDataStore } from "@/store/dummy";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";

export const ProductDataList = () => {
  const products = useDummiesDataStore.products;
  return (
    <>
      <UiTitleAndSearch
        title="Products"
        searchId="q_product"
        placeholder="Cari product"
      />

      <UiList
        datas={products}
        renderItems={(product) => (
          <div className="w-full">
            <div className="flex gap-x-2">
              <div className="min-h-15 max-h-15 min-w-15 max-w-15 bg-black/5 border border-neutral-400"></div>
              <div className="w-full">
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-xs italic">{product.desc}</p>
              </div>
            </div>

            <hr className="border border-black/10 mt-2 mb-1" />

            <div className="text-sm flex items-center justify-between">
              <p className="flex items-center gap-x-1">
                {product.pupular ? (
                  <FaStar />
                ) : product.recommended ? (
                  <FaThumbsUp />
                ) : (
                  ""
                )}
                <span
                  className={[
                    product.pupular || product.recommended
                      ? "font-semibold"
                      : "",
                    "capitalize",
                  ].join(" ")}>
                  {product.category}{" "}
                  {product.pupular
                    ? "populer"
                    : product.recommended
                      ? "rekomendasi"
                      : ""}
                </span>
              </p>
              <p className="font-semibold text-orange-600">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        )}
      />
    </>
  );
};
