import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { UiFormInput, UiFormPassword } from "@/components/UiFormInput";

const DefaultFormInput = () => {
  return (
    <>
      <UiFormInput idName="name" label="Fullname" required={true} />
      <UiFormInput idName="username" label="Username" required={true} />
    </>
  );
};
const PasswordFormInput = () => {
  return (
    <>
      <UiFormPassword idName="password" label="Password" required={true} />
      <UiFormPassword
        idName="password_confirmation"
        label="Password Confirmation"
        required={true}
      />
    </>
  );
};

export const UserFormInput = () => {
  // HOOKS
  const params = useParams();
  const navigate = useNavigate();
  const elForm = useRef(null);
  const [isFormPasswordActive, setFormPassword] = useState(false);

  // LOGICS
  const isUpdate = Boolean(params.id);

  // HANDLERS
  const handleFormPassword = () => {
    setFormPassword((prev) => !prev);
    elForm.current.reset();
  };

  return (
    <main className="pt-12">
      <section>
        <div className="w-full max-w-xs mx-auto min-[320px]:shadow min-[320px]:pt-4">
          <div
            className={[
              isUpdate ? "bg-indigo-500" : "bg-emerald-500",
              "font-bold text-xl py-1 px-2 text-white shadow",
            ].join(" ")}>
            {isUpdate ? "Form Update User" : "Form New User"}
          </div>
          <form ref={elForm} className="mt-3 space-y-3 px-3 pb-3">
            {isUpdate ? (
              isFormPasswordActive ? (
                <PasswordFormInput />
              ) : (
                <DefaultFormInput />
              )
            ) : (
              <>
                <DefaultFormInput />
                <PasswordFormInput />
              </>
            )}

            {params.id && (
              <button
                type="button"
                onClick={handleFormPassword}
                className="text-orange-600 text-xs text-center w-full">
                {isFormPasswordActive ? "Cancel it!" : "Change Password ?"}
              </button>
            )}

            <div className="text-sm font-semibold flex gap-x-2 justify-end mt-6">
              <button
                type="button"
                onClick={() => {
                  navigate("/admin/user");
                }}>
                Back
              </button>
              <button
                className={[
                  isUpdate ? "bg-indigo-400" : "bg-emerald-400",
                  "text-white px-2 py-1 rounded",
                ].join(" ")}>
                Save {isUpdate && "change"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
