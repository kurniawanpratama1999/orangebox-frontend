import { NavLink } from "react-router";
import { UiFormSearch } from "./UiFormInput";
import { BiPlus } from "@react-icons/all-files/bi/BiPlus";
import { cn } from "tailwind-variants";

export const UiTitleAndSearch = ({ title, searchId, ...props }) => {
  return (
    <section className="flex items-center justify-between gap-3 mb-4">
      <h2 className="font-semibold text-xl italic">{title}</h2>
      <UiFormSearch idName={searchId} {...props} />
    </section>
  );
};

export const UiListAvatar = ({
  size = "min-w-20 max-w-20 aspect-square",
  rounded = "rounded",
  image,
}) => {
  const style = cn("bg-black/5 border border-neutral-400", size, rounded);
  return !image ? (
    <div className={style}></div>
  ) : (
    <img src={"http://localhost:3001/uploads/" + image} className={style} />
  );
};

export const UiList = ({ datas, uniqueKey, renderItems, renderAvatar }) => {
  return (
    <section className="relative grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
      {datas.map((data) => (
        <NavLink
          key={`${uniqueKey}-${data.id}-${data.name}`}
          to={`${data.id}/update`}
          className="flex gap-x-2 px-3 py-2 rounded bg-neutral-200 shadow hover:pl-4 transition-[padding-left]">
          {renderAvatar && renderAvatar(data)}
          {renderItems(data)}
        </NavLink>
      ))}

      <NavLink
        to="create"
        className={cn(
          "fixed bottom-3 right-3 w-fit",
          "bg-emerald-600 opacity-70 hover:opacity-100 text-white",
          "flex-center text-xl shadow p-2 rounded  ",
        )}>
        <BiPlus />
        <span className="text-base">Tambah Data</span>
      </NavLink>
    </section>
  );
};
