import { BiDotsHorizontal } from "@react-icons/all-files/bi/BiDotsHorizontal";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const user = [
  {
    id: 1,
    photo: "",
    name: "Kurniawan Pratama",
    username: "superadmin",
  },
  {
    id: 2,
    photo: "",
    name: "Rizki Wijaya",
    username: "admin",
  },
  {
    id: 3,
    photo: "",
    name: "Nabilla Pradisa",
    username: "admin",
  },
];

const DataUser = ({ id, name, username }) => {
  const [isActionActive, setActionActive] = useState(false);
  const navigate = useNavigate();
  const handleAction = () => {
    setActionActive(() => !isActionActive);
  };

  const handleUpdate = () => {
    handleAction();
    navigate(`${id}/update`);
  };
  const handleDelete = (id) => {
    handleAction();
  };
  return (
    <>
      {isActionActive && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-transparent z-11"
          onClick={handleAction}></div>
      )}
      <article className="bg-orange-300 border-t-4 border-orange-300 hover:border-orange-500 p-3 shadow relative transition-[border]">
        <button className="absolute top-2 right-2" onClick={handleAction}>
          <BiDotsHorizontal className="text-white" />
        </button>

        <div className="flex gap-x-2 items-center">
          <div className="size-15 rounded-full border border-orange-100 bg-orange-400"></div>
          <div className="text-sm">
            <h3 className="font-bold text-orange-950">{name}</h3>
            <p className="text-xs italic">{username}</p>
          </div>
        </div>

        <div
          className={[
            isActionActive ? "mt-3 h-6" : "mt-0 h-0",
            "w-full flex justify-end gap-x-2 text-xs overflow-hidden transition-all relative z-12",
          ].join(" ")}>
          <button
            type="button"
            onClick={handleDelete}
            className={[
              isActionActive ? "" : "hidden",
              "px-2 py-1 bg-red-500 rounded text-white",
            ].join(" ")}>
            Delete
          </button>
          <button
            type="button"
            onClick={() => handleUpdate(id)}
            className={[
              isActionActive ? "" : "hidden",
              "px-2 py-1 bg-indigo-500 rounded text-white",
            ].join(" ")}>
            Update
          </button>
        </div>
      </article>
    </>
  );
};

export const UserListTable = () => {
  return (
    <main className="pt-12 px-2">
      <section id="search-section" className="pt-2">
        <div className="w-full flex flex-col">
          <label htmlFor="search"></label>
          <input
            type="search"
            placeholder="Search user"
            name="search"
            id="search"
            className="w-full border border-neutral-400 px-2 py-1"
          />
        </div>
      </section>

      <section className="mt-2 flex flex-col gap-y-3">
        {user.map((v) => (
          <DataUser
            key={`user-${v.username}-${v.id}`}
            id={v.id}
            name={v.name}
            username={v.username}
          />
        ))}
      </section>

      <Link
        to="create"
        className="size-10 flex-center rounded-full bg-emerald-100 outline-2 outline-emerald-600 fixed bottom-5 right-3 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-3xl font-semibold text-emerald-600">+</span>
      </Link>
    </main>
  );
};
