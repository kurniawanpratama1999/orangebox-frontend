import { useRef, useState } from "react";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { AiFillEyeInvisible } from "@react-icons/all-files/ai/AiFillEyeInvisible";

export const UiFormInput = ({ idName, label, required, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={idName} className="text-neutral-700">
        {label} {required && <small className="text-red-500">*</small>}
      </label>
      <input
        type="text"
        name={idName}
        id={idName}
        className="border border-neutral-400 px-3 py-1 bg-neutral-100"
        required={required}
        {...props}
      />
    </div>
  );
};

export const UiFormPassword = ({ idName, label, required, ...props }) => {
  const [isShowPassword, setShowPassword] = useState(false);
  const showPassword = useRef(null);
  const handleShowPassword = () => {
    setShowPassword(() => showPassword.current.checked);
  };
  return (
    <div className="flex flex-col">
      <label htmlFor={idName} className="text-neutral-700">
        {label} {required && <small className="text-red-500">*</small>}
      </label>
      <div className="border border-neutral-400 bg-neutral-100 flex flex-row">
        <input
          name={idName}
          id={idName}
          type={isShowPassword ? "text" : "password"}
          className="w-full px-3 py-1"
          {...props}
        />
        <label
          htmlFor={`show-${idName}`}
          className="px-2 bg-neutral-300 flex items-center">
          <span className="text-black">
            {isShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
          <input
            ref={showPassword}
            onChange={handleShowPassword}
            type="checkbox"
            name={`show-${idName}`}
            id={`show-${idName}`}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};
