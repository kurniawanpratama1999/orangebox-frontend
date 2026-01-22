import { useEffect, useState } from "react";
import { UiGotoUp } from "./UiGotoUp";

export const UiHeader = () => {
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
      <UiGotoUp isShow={isGotoUpShow} />

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
