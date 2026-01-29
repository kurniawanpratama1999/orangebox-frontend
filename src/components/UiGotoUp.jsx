import { BsChevronUp } from "@react-icons/all-files/bs/BsChevronUp";
import { tv } from "tailwind-variants";

export const UiGotoUp = ({ isShow }) => {
  const up = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const btnClass = tv({
    base: [
      "z-100 size-12 rounded-full",
      "flex-center",
      "bg-orange-400 text-xl shadow opacity-50",
    ],
    variants: {
      isShow: {
        true: "fixed bottom-5 right-5",
        false: "hidden",
      },
    },
  });
  return (
    <button type="button" onClick={up} className={btnClass({ isShow })}>
      <BsChevronUp />
    </button>
  );
};
