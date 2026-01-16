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
          <>
            <div className="flex gap-x-2">
              <div className="min-h-15 max-h-15 min-w-15 max-w-15 bg-orange-300 border"></div>
              <div className="text-orange-800">
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-xs italic">{product.desc}</p>
              </div>
            </div>

            <hr className="border border-black/10 mt-2 mb-1" />

            <div className="text-sm text-orange-800 flex items-center justify-between">
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
              <p className="font-semibold">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          </>
        )}
      />
    </>
  );
};
