import { NavLink } from "react-router";
import { UiFormSearch } from "./UiFormInput";
import { BiPlus } from "@react-icons/all-files/bi/BiPlus";

export const UiTitleAndSearch = ({ title, searchId, ...props }) => {
  return (
    <section className="flex items-center justify-between gap-3 mb-4">
      <h2 className="font-semibold text-xl italic text-orange-800">{title}</h2>
      <UiFormSearch idName={searchId} {...props} />
    </section>
  );
};

export const UiListAvatar = ({
  size = "size-12",
  rounded = "rounded-full",
  children,
}) => {
  return (
    <div className={["bg-orange-300 border", size, rounded].join(" ")}>
      {children}
    </div>
  );
};

export const UiList = ({ datas, uniqueKey, renderItems, children }) => {
  return (
    <section className="relative grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
      {datas.map((data) => (
        <NavLink
          key={`${uniqueKey}-${data.id}-${data.name}`}
          to={`${data.id}/update`}
          className="flex items-center gap-x-2 px-3 py-2 rounded bg-orange-100 shadow hover:pl-4 transition-[padding-left]">
          {children}
          {renderItems(data)}
        </NavLink>
      ))}

      <NavLink
        to="create"
        className={[
          "fixed bottom-3 right-3 w-fit",
          "bg-orange-600 opacity-50 hover:opacity-100 text-orange-300",
          "flex-center text-xl shadow p-2 rounded  ",
        ].join(" ")}>
        <BiPlus />
        <span className="text-base">Tambah Data</span>
      </NavLink>
    </section>
  );
};
