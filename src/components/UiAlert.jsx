import { tv } from "tailwind-variants";

import { FaCheck } from "@react-icons/all-files/fa/FaCheck.js";
import { BiX } from "@react-icons/all-files/bi/BiX.js";
import { FaExclamation } from "@react-icons/all-files/fa/FaExclamation.js";
import { FaQuestion } from "@react-icons/all-files/fa/FaQuestion.js";

export const UiAlert = ({ description, type }) => {
  const iconMap = {
    success: <FaCheck />,
    error: <BiX className="text-xl" />,
    failed: <BiX className="text-xl" />,
    warning: <FaExclamation />,
    info: <FaQuestion />,
  };

  const container = tv({
    base: "w-full border-l-4 p-2",
    variants: {
      status: {
        success: "bg-emerald-100 border-emerald-600",
        error: "bg-red-100 border-red-600",
        failed: "bg-red-100 border-red-600",
        warning: "bg-amber-100 border-amber-600",
        info: "bg-blue-100 border-blue-600",
      },
    },
  });

  const wraper = tv({
    base: "flex items-center gap-2",
    variants: {
      status: {
        success: "text-emerald-600",
        error: "text-red-600",
        failed: "text-red-600",
        warning: "text-amber-600",
        info: "text-blue-600",
      },
    },
  });

  const icon = tv({
    base: "aspect-square rounded-full text-white",
    variants: {
      status: {
        success: "bg-emerald-600",
        error: "bg-red-600",
        failed: "bg-red-600",
        warning: "bg-amber-600",
        info: "bg-blue-600",
      },
    },
  });
  return (
    <div className={container({ status: type })}>
      <div className={wraper({ status: type })}>
        <div className={icon({ status: type })}>{iconMap[type]}</div>
        <p className="capitalize">{type} Message</p>
      </div>
      <p className="ml-7 mt-1 text-sm">{description}</p>
    </div>
  );
};
