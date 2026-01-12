import { useRef, useState } from "react";

export const Login = () => {
  const [isShowPassword, setShowPassword] = useState(false);
  const showPassword = useRef(null);
  const handleTypeOfPassword = () => {
    setShowPassword(() => showPassword.current.checked);
  };
  return (
    <section className="pt-12 h-dvh flex-center px-3">
      <div className="shadow-md w-full max-w-2xs rounded-lg overflow-hidden">
        <div className="bg-orange-400 py-3">
          <h2 className="text-xl text-center font-semibold text-white">
            Admin Account
          </h2>
        </div>

        <form className="w-full p-4 space-y-3">
          <div className="w-full flex flex-col">
            <label htmlFor="username">
              username <small className="text-red-500">*</small>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-neutral-400 px-2 py-1 rounded"
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="username">
              password <small className="text-red-500">*</small>
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              id="username"
              name="username"
              className="border border-neutral-400 px-2 py-1 rounded"
            />

            <div className="text-xs flex gap-1 items-center justify-end mt-1 italic">
              <label htmlFor="show-password">show password</label>
              <input
                ref={showPassword}
                type="checkbox"
                name="show-password"
                id="show-password"
                onChange={handleTypeOfPassword}
              />
            </div>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="px-2 py-1 w-full bg-orange-400 rounded font-bold text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
