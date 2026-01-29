import { BsFilter } from "@react-icons/all-files/bs/BsFilter";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import { useEffect, useState } from "react";
import { useDummiesDataStore } from "@/store/dummy";

const OptionRadioGroup = ({
  isShowRadio,
  htmlFor,
  options = [],
  value,
  onChange,
}) => {
  return (
    <fieldset
      className={[
        isShowRadio ? "absolute" : "hidden",
        "top-7 rounded bg-neutral-100 p-2 shadow flex flex-col gap-2 w-full",
      ].join(" ")}>
      {options.map((option, i) => {
        return (
          <label
            key={"choice" + htmlFor + i}
            htmlFor={htmlFor + "-" + option.value}
            className="flex items-center gap-x-1 text-xs">
            <input
              type="radio"
              value={option.value}
              name={htmlFor}
              id={htmlFor + "-" + option.value}
              checked={!value ? i === 0 : value == option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </fieldset>
  );
};

const ButtonSort = ({ children, ...props }) => {
  return (
    <button
      className={[
        "bg-neutral-100 shadow px-2 py-1 text-xs flex items-center gap-x-2 rounded-full",
      ].join(" ")}
      {...props}>
      <span className="font-semibold leading-none">{children}</span>
      <div className="mt-[3px]">
        <BsChevronDown />
      </div>
    </button>
  );
};

const SearchAndSort = () => {
  const [sortByName, setSortByName] = useState("none");
  const [isShowRadioName, setShowRadioName] = useState(false);

  const [sortByPrice, setSortByPrice] = useState("none");
  const [isShowRadioPrice, setShowRadioPrice] = useState(false);

  useEffect(() => {
    console.log(sortByName);
  }, [sortByName]);

  useEffect(() => {
    console.log(sortByPrice);
  }, [sortByPrice]);
  return (
    <section>
      <div className="py-2 px-3 flex items-center justify-between">
        <label
          htmlFor="search-menu"
          className="text-sm flex items-center w-full max-w-[170px] bg-neutral-100 rounded-full shadow px-2">
          <div className="p-1">
            <BsSearch className="text-neutral-600" />
          </div>
          <input
            type="text"
            placeholder="Search menu"
            className="w-full p-1 outline-0"
          />
        </label>

        <button className="text-xl">
          <BsFilter />
        </button>
      </div>

      <div className="px-3 py-1 flex items-center gap-x-2">
        <div className="relative">
          <ButtonSort onClick={() => setShowRadioName(!isShowRadioName)}>
            Name
          </ButtonSort>
          <OptionRadioGroup
            isShowRadio={isShowRadioName}
            htmlFor={"sort-by-name"}
            options={[
              { label: "None", value: "none" },
              { label: "a~z", value: "a" },
              { label: "z~a", value: "z" },
            ]}
            value={sortByName}
            onChange={setSortByName}
          />
        </div>

        <div className="relative">
          <ButtonSort onClick={() => setShowRadioPrice(!isShowRadioPrice)}>
            Pricing
          </ButtonSort>
          <OptionRadioGroup
            isShowRadio={isShowRadioPrice}
            htmlFor={"sort-by-name"}
            options={[
              { label: "None", value: "none" },
              { label: "0~9", value: "0" },
              { label: "9~0", value: "9" },
            ]}
            value={sortByPrice}
            onChange={setSortByPrice}
          />
        </div>
      </div>
    </section>
  );
};

const Items = () => {
  const products = useDummiesDataStore.products;
  return (
    <section className="min-h-dvh mt-2 px-4 py-5">
      <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
        {products.map((product, iProduct) => {
          return (
            <article
              key={"menu" + product.id}
              className="p-2 bg-white/30 shadow rounded">
              <div className="flex max-sm:flex-col items-start justify-start gap-x-2">
                <div className="max-sm:min-w-full sm:min-w-20 sm:max-w-20 aspect-square bg-black/5 rounded"></div>
                <div className="w-full max-sm:mt-2">
                  <p className="text-xs text-neutral-700">
                    Kategori: {product.category}
                  </p>
                  <h3 className="font-semibold text-sm">
                    <span>{product.name}</span>
                    {product.isNew ? (
                      <small className="text-orange-600 ml-2 italic text-xs align-top">
                        New!
                      </small>
                    ) : (
                      product.isFavorite && (
                        <small className="text-blue-600 ml-2 italic text-xs align-top">
                          Favorite!
                        </small>
                      )
                    )}
                  </h3>
                  <p className="italic text-xs">{product.desc}</p>
                  <span className="block font-semibold text-orange-700 mt-3">
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
        <article></article>
      </div>
    </section>
  );
};

export const Menu = () => {
  return (
    <>
      <button
        className="px-3 py-1 bg-indigo-300"
        type="button"
        onClick={handleOpenModal}>
        open modal
      </button>
      <SearchAndSort />
      <Items />
    </>
  );
};
