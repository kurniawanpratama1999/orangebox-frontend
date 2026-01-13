import { products } from "@/store/dummy";
import { useEffect, useState } from "react";

const Wraper = ({ children, label }) => {
  const [isExpand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <>
      <div className="flex items-center justify-between gap-x-2">
        <h2 className="font-bold uppercase">{label}</h2>
        <button type="button" onClick={handleExpand}>
          {isExpand ? "Collapse" : "Expand"}
        </button>
      </div>
      <div
        className={[
          isExpand
            ? "grid grid-cols-2 min-[320px]:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3"
            : "flex [&_article]:min-w-32 gap-3 overflow-x-auto",
          "pt-2 pb-4 h-full",
        ].join(" ")}>
        {children}
      </div>
    </>
  );
};

const Product = ({ product }) => {
  return (
    <article className="bg-neutral-100 shadow rounded">
      <div className="w-full aspect-square bg-neutral-300 relative">
        <span className="absolute text-[10px] p-1 bottom-0 right-0"></span>
      </div>
      <div className="py-1 px-2 flex flex-col min-h-25">
        <h3 className="font-semibold text-xs line-clamp-2">{product.name}</h3>
        <p className="text-[10px] line-clamp-2">{product.desc}</p>
        <span className="font-mono text-xs text-orange-700 block pt-3 mt-auto">
          Rp {new Intl.NumberFormat("id-ID").format(product.price)},-
        </span>
      </div>
    </article>
  );
};

export const ProductListTable = () => {
  const allProduct = [...products];

  const populerRecommended = [...products].filter(
    (product) => product.pupular && product.recommended
  );

  const populer = [...products].filter((product) => product.pupular);

  const recommended = [...products].filter((product) => product.pupular);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let storeCategories = [];
    allProduct.forEach((product) => {
      const findCategory = storeCategories.find((p) => p == product.category);

      if (!findCategory) {
        storeCategories.push(product.category);
      }
    });

    setCategories(storeCategories);
  }, []);

  return (
    <main className="pt-12">
      <section className="p-2">
        <div className="flex flex-col">
          <label htmlFor="search" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search product"
            className="border-0 px-2 py-1 bg-neutral-100 shadow rounded"
          />
        </div>
      </section>

      <section className="flex justify-end gap-3 text-xs pb-2 px-2">
        <div className="flex flex-col bg-neutral-100 rounded-full pl-2 border border-neutral-400">
          <label htmlFor="sort-by-alphabet" />
          <select name="sort-by-alphabet" id="sort-by-alphabet">
            <option value="a">a ~ z</option>
            <option value="z">z ~ a</option>
          </select>
        </div>
        <div className="flex flex-col bg-neutral-100 rounded-full pl-2 border border-neutral-400">
          <label htmlFor="sort-by-price" />
          <select name="sort-by-price" id="sort-by-price">
            <option value="a">0 ~ 9</option>
            <option value="z">9 ~ 0</option>
          </select>
        </div>
        <button className="px-2 rounded-full bg-emerald-400 text-white">
          Add Product
        </button>
      </section>

      <section className="px-2 text-sm space-y-4">
        {/* JUST POPULER AND RECOMMENDED */}
        {populerRecommended.length > 0 && (
          <div>
            <Wraper label="populer & recommended">
              {populerRecommended.map((product) => (
                <Product
                  product={product}
                  key={`popularAndRecommended${product.id}`}
                />
              ))}
            </Wraper>
          </div>
        )}

        {/* JUST POPULER */}
        {populer.length > 0 && (
          <div>
            <Wraper label="populer">
              {populer.map((product) => (
                <Product product={product} key={`popular${product.id}`} />
              ))}
            </Wraper>
          </div>
        )}

        {/* JUST RECOMMENDED */}
        {recommended.length > 0 && (
          <div>
            <Wraper label="recommended">
              {recommended.map((product) => (
                <Product product={product} key={`recommended${product.id}`} />
              ))}
            </Wraper>
          </div>
        )}

        {/* BY CATEGORY */}
        {categories.map((category) => (
          <div key={category}>
            <Wraper key={`wrapper-` + category} label={category}>
              {allProduct.map(
                (p) =>
                  p.category == category && (
                    <Product key={`product-${category}-${p.id}`} product={p} />
                  )
              )}
            </Wraper>
          </div>
        ))}
      </section>
    </main>
  );
};
