import { useNavigate } from "react-router";
import {
  UiFormControl,
  UiFormInput,
  UiFormPassword,
} from "@/components/UiFormInput";

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

export const UserFormControl = () => {
  const navigate = useNavigate();
  return (
    <UiFormControl
      formTitle={"User"}
      renderInput={() => <DefaultFormInput />}
      renderAction={(isUpdate) => (
        <>
          {isUpdate && (
            <button type="button" className="text-red-600">
              Delete
            </button>
          )}
          <button
            type="button"
            className="ml-auto"
            onClick={() => {
              navigate(-1);
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
        </>
      )}
    />
  );
};
