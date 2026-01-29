import { UiFormPassword } from "@/components/UiFormInput.jsx";

export const PasswordFormInput = ({ data }) => {
  const { password, passwordConfirm, setPassword, setPasswordConfirm } = data;
  return (
    <>
      <UiFormPassword
        idName="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />
      <UiFormPassword
        idName="password_confirmation"
        label="Password Confirmation"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required={true}
      />
    </>
  );
};
