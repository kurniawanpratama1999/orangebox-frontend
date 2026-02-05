import { UiCurrentLocation } from "@/components/UiCurrentLocation.jsx";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut.js";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown.js";
import { BiMenuAltLeft } from "@react-icons/all-files/bi/BiMenuAltLeft.js";
import { BiUser } from "@react-icons/all-files/bi/BiUser.js";
import { Navigate, Outlet } from "react-router";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext.jsx";

const Header = () => {
  /* HOOKS */
  const [isProfile, setProfile] = useState(false);
  const [isNavigation, setNavigation] = useState(false);

  // CONTEXT
  const { user } = useAuth();

  // HANDLER
  const toggleProfile = () => setProfile(!isProfile);
  const toggleNavigation = () => setNavigation(!isNavigation);
  const closeAll = () => {
    setProfile(false);
    setNavigation(false);
  };
  return (
    <>
      <div className="lg:fixed z-99 lg:top-0 lg:left-0 lg:bottom-0 lg:w-4xs lg:bg-neutral-200 lg:flex lg:flex-col lg:shadow-2xl">
        <header
          className={[
            "max-lg:fixed max-lg:z-100 max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:shadow lg:p-1",
          ].join(" ")}>
          <div className="flex items-center lg:items-stretch justify-between max-lg:bg-neutral-200 max-lg:h-12 max-lg:px-2 text-orange-600 lg:text-orange-600 lg:gap-x-1">
            <button
              className="text-xl lg:hidden text-black"
              onClick={toggleNavigation}>
              <BiMenuAltLeft />
            </button>
            <div className="lg:bg-white/40 lg:rounded lg:w-full lg:flex lg:flex-col lg:px-2 lg:py-1">
              <h1 className="font-bold text-2xl lg:text-base">Orangebox</h1>
              <p className="hidden lg:block lg:text-xs italic">Dashboard</p>
            </div>
            <button
              onClick={toggleProfile}
              className="text-xl lg:px-1 lg:bg-orange-200 lg:rounded lg:py-1 text-black">
              <BiChevronDown className="lg:-rotate-90" />
            </button>
          </div>
        </header>

        <div
          onClick={closeAll}
          className={[
            isNavigation || isProfile ? "fixed" : "hidden",
            "top-0 left-0 right-0 bottom-0 bg-black/5 z-98",
          ].join(" ")}></div>

        <nav
          className={[
            isNavigation ? "" : "max-lg:hidden",
            "max-lg:fixed max-lg:z-99 max-lg:top-0 max-lg:left-0 max-lg:bottom-0 max-lg:pt-12 max-lg:w-4xs max-lg:bg-neutral-200 max-lg:shadow",
          ].join(" ")}>
          <ul className="p-2 flex flex-col gap-y-2 list-disc ml-4">
            <li>
              <UiCurrentLocation to="/admin">Ringkasan</UiCurrentLocation>
            </li>
            <li>
              <UiCurrentLocation to="/admin/user">
                User Active
              </UiCurrentLocation>
            </li>
            <li>
              <UiCurrentLocation to="/admin/category">
                Categories
              </UiCurrentLocation>
            </li>
            <li>
              <UiCurrentLocation to="/admin/product">
                Products
              </UiCurrentLocation>
            </li>
            <li>
              <UiCurrentLocation to="/admin/profile-umkm">
                Profile UMKM
              </UiCurrentLocation>
            </li>
            <li>
              <UiCurrentLocation to="/admin/sosmed">Sosmed</UiCurrentLocation>
            </li>
            <li>
              <UiCurrentLocation to="/admin/testimoni">
                Testimoni
              </UiCurrentLocation>
            </li>
          </ul>
        </nav>

        <nav
          className={[
            isProfile ? "" : "hidden",
            "fixed z-99 top-14 right-2 w-full max-w-3xs bg-neutral-200 p-2 rounded",
            "lg:top-1 lg:left-[calc(var(--container-4xs)+6px)]",
          ].join(" ")}>
          <div className="flex items-center gap-x-1">
            <div className="size-12 rounded-full bg-black/10 overflow-hidden flex-center">
              {user?.photo ? (
                <img
                  src={`http://localhost:3001/uploads/${user.photo}`}
                  className="w-full h-full"
                />
              ) : (
                <BiUser className="text-xl" />
              )}
            </div>
            <div>
              <p className="text-sm font-semibold">
                {user.name ?? "not found"}
              </p>
              <p className="italic text-xs">{user.name ?? "please login"}</p>
            </div>
          </div>
          <hr className="border-white/50 mt-2 mb-1" />
          <button className="text-sm flex items-center gap-x-1 ml-auto font-semibold">
            <BiLogOut />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </>
  );
};

const Loader = () => {
  return <div className="w-full h-dvh flex-center">Loading...</div>;
};

export const AdminLayout = () => {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth == "LOADING" ? (
        <Loader />
      ) : isAuth == "ACCEPTED" ? (
        <>
          <Header />
          <main className="max-lg:pt-12 min-h-dvh bg-neutral-300 lg:relative lg:left-(--container-4xs) w-full lg:max-w-[calc(100dvw-var(--container-4xs))]">
            <div className="p-2 container mx-auto">
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <Navigate to={"/auth"} />
      )}
    </>
  );
};
