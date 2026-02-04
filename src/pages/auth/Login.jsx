import { UiFormInput, UiFormPassword } from "@/components/UiFormInput";
import { useModal } from "@/context/ModalContext.jsx";
import { accessToken } from "@/store/accessToken.js";
import { useAxios } from "@/store/useAxios.js";
import { useState } from "react";

export const Login = () => {
  const { handler } = useModal();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);

    useAxios
      .post("/auth/login", { username, password })
      .then((res) => {
        accessToken.current = res.data.results;

        handler.openModal("Kamu berhasil login", {
          type: "success",
          navigate: "/admin",
        });
      })
      .catch((e) => {
        console.log(e);
        setButtonDisabled(false);
        handler.openModal("Kamu gagal login", {
          type: "failed",
        });
      });
  };
  return (
    <main className="bg-neutral-300">
      <section className="pt-12 h-dvh flex-center px-3 bg-neutral-300">
        <div className="shadow-md w-full max-w-2xs rounded-lg overflow-hidden">
          <div className="bg-orange-600 py-3">
            <h2 className="text-xl text-center font-semibold text-white">
              Admin Account
            </h2>
          </div>

          <form
            onSubmit={login}
            className="w-full p-4 space-y-3 bg-neutral-200">
            <UiFormInput
              onChange={(e) => setUsername(e.target.value)}
              idName="username"
              label="username"
              required={true}
            />

            <UiFormPassword
              onChange={(e) => setPassword(e.target.value)}
              idName="password"
              label="password"
            />

            <div className="mt-5">
              <button
                type="submit"
                disabled={isButtonDisabled}
                className="px-2 py-1 w-full bg-orange-600 disabled:bg-neutral-600 rounded font-bold text-white">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
