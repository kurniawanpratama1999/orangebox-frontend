import { UiFormInput, UiFormPassword } from "@/components/UiFormInput";

export const Login = () => {
  return (
    <section className="pt-12 h-dvh flex-center px-3">
      <div className="shadow-md w-full max-w-2xs rounded-lg overflow-hidden">
        <div className="bg-orange-400 py-3">
          <h2 className="text-xl text-center font-semibold text-white">
            Admin Account
          </h2>
        </div>

        <form className="w-full p-4 space-y-3">
          <UiFormInput idName="username" label="username" required={true} />

          <UiFormPassword idName="password" label="password" />

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
