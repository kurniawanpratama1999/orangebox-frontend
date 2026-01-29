import { UiFormInput } from "@/components/UiFormInput.jsx";

export const DefaultFormInput = ({ data }) => {
  const { name, username, setName, setUsername } = data;
  return (
    <>
      <UiFormInput
        idName="name"
        label="Fullname"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required={true}
      />
      <UiFormInput
        idName="username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required={true}
      />
    </>
  );
};
