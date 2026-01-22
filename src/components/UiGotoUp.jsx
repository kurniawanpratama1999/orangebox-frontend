import { BsChevronUp } from "@react-icons/all-files/bs/BsChevronUp";

export const UiGotoUp = ({ isShow }) => {
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
