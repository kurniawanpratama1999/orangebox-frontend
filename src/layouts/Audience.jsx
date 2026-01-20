import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { BsChevronUp } from "@react-icons/all-files/bs/BsChevronUp";
export const AudienceLayout = () => {
  return (
    <>
      <Header />
      <main className="max-w-dvw overflow-hidden bg-neutral-300">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const GotoUp = ({ isShow }) => {
  const up = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      type="button"
      onClick={up}
      className={[
        "z-100 size-12 rounded-full",
        isShow ? "fixed bottom-5 right-5" : "hidden",
        " flex-center",
        " bg-orange-400 text-xl shadow opacity-50",
      ].join(" ")}>
      <BsChevronUp />
    </button>
  );
};

const Footer = () => {
  return (
    <footer className="bg-orange-700 text-white p-2 text-sm">
      <div className="mb-5">
        <h2 className="text-base font-semibold mb-2">Sosial Media</h2>
        <div className="space-y-3 pl-3 border-l border-white ml-3">
          <div>
            <h2 className="font-bold">Whatsapp</h2>
            <p>0890 1234 5678</p>
          </div>
          <div>
            <h2 className="font-bold">Instagram</h2>
            <p>@orangefood_</p>
          </div>
          <div>
            <h2 className="font-bold">Email</h2>
            <p>orangefood.gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h2 className="text-base font-semibold mb-2">Link Terkait</h2>
        <div className="space-y-3 pl-3 border-l border-white ml-3">
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>Favorite Menu</p>
          </div>
          <div>
            <p>Fasilitas dan Tempat</p>
          </div>
          <div>
            <p>Testimoni</p>
          </div>
          <div>
            <p>Booking</p>
          </div>
          <div>
            <p>Lokasi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Header = () => {
  const [isBgWhite, setBgWhite] = useState(false);
  const [isGotoUpShow, setGotoUpShow] = useState(false);

  useEffect(() => {
    const windowEventScroll = () => {
      const scrollY = window.scrollY;
      setBgWhite(Boolean(scrollY));
      setGotoUpShow(scrollY > 100);
    };

    window.addEventListener("scroll", windowEventScroll);
    return () => {
      window.removeEventListener("scroll", windowEventScroll);
    };
  }, []);
  return (
    <>
      <GotoUp isShow={isGotoUpShow} />

      <header
        className={[
          isBgWhite ? "bg-white/20 backdrop-blur shadow" : "",
          "fixed z-99 top-0 left-0 right-0 h-12 flex items-center justify-between px-4",
        ].join(" ")}>
        <h2 className="text-2xl font-bold text-orange-500 text-shadow-xs text-shadow-black">
          OrangeBox
        </h2>

        <div className="">
          <button className="size-7 flex flex-col justify-center gap-1.5">
            <div className="h-[3px] bg-orange-500 w-full rounded-full shadow-2xs shadow-black"></div>
            <div className="h-[3px] bg-orange-500 w-full rounded-full shadow-2xs shadow-black"></div>
            <div className="h-[3px] bg-orange-500 w-full rounded-full shadow-2xs shadow-black"></div>
          </button>
        </div>
      </header>
    </>
  );
};
