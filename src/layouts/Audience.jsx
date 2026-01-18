import { Outlet } from "react-router";
import { BiMenu } from "@react-icons/all-files/bi/BiMenu";

export const AudienceLayout = () => {
  return (
    <>
      <header className="h-12 bg-white/10 backdrop-blur text-orange-500 fixed z-100 top-0 left-0 right-0">
        <div className="px-3 flex items-center justify-between h-full">
          <h1 className="font-semibold text-2xl [text-shadow:.5px_.5px_.5px_black]">
            OrangeBox
          </h1>
          <button className="text-2xl">
            <BiMenu />
          </button>
          <nav className="gap-x-10 hidden">
            <a href="">Home</a>
            <a href="">FnB</a>
            <a href="">Testimoni</a>
            <a href="">Booking</a>
            <a href="">QnA</a>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
