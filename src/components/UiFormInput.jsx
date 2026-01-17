import { useRef, useState } from "react";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { AiFillEyeInvisible } from "@react-icons/all-files/ai/AiFillEyeInvisible";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { useNavigate, useParams } from "react-router";

export const UiFormInput = ({ idName, label, required, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={idName} className="text-neutral-600">
        {label} {required && <small className="text-red-500">*</small>}
      </label>
      <input
        type="text"
        name={idName}
        id={idName}
        className="border-2 border-black/10 px-3 py-1 bg-black/5 rounded"
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
      <div className="border-2 border-black/10 bg-black/5 rounded flex flex-row">
        <input
          name={idName}
          id={idName}
          type={isShowPassword ? "text" : "password"}
          className="w-full px-3 py-1 bg-transparent"
          {...props}
        />
        <label
          htmlFor={`show-${idName}`}
          className="px-2 bg-black/8 flex items-center">
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

export const UiFormSearch = ({ idName, ...props }) => {
  return (
    <div className="flex gap-x-2">
      <label
        htmlFor={idName}
        className="bg-orange-100 rounded-full w-full max-w-3xs flex items-center pl-2 shadow">
        <input
          type="search"
          name={idName}
          id={idName}
          className="px-2 py-1 border-0 outline-0 w-full"
          {...props}
        />
        <button type="button" className="px-2 py-1 block text-neutral-500">
          <BiSearch />
        </button>
      </label>
    </div>
  );
};

export const UiFormControl = ({ formTitle, renderInput, renderAction }) => {
  const params = useParams();
  const isUpdate = Boolean(params.id);
  const elForm = useRef(null);

  return (
    <section>
      <div className="w-full max-w-xs mx-auto min-[320px]:shadow rounded bg-orange-100">
        <div
          className={[
            isUpdate ? "bg-indigo-500" : "bg-emerald-500",
            "font-bold text-xl py-1 px-2 text-white shadow rounded-t",
          ].join(" ")}>
          {isUpdate ? `Form Update ${formTitle}` : `Form New ${formTitle}`}
        </div>
        <form ref={elForm} className="mt-3 space-y-3 px-3 pb-3">
          {renderInput()}
          <div className="text-sm font-semibold flex gap-x-2 mt-6">
            {renderAction(isUpdate)}
          </div>
        </form>
      </div>
    </section>
  );
};
