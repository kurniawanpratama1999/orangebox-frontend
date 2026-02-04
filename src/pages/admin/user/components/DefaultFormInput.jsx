import { UiFormImage, UiFormInput } from "@/components/UiFormInput.jsx";

export const DefaultFormInput = ({ data }) => {
  const { name, username, setName, setUsername, imageUrl, setImageFile } = data;
  return (
    <>
      <UiFormImage imageUrl={imageUrl} setImageFile={setImageFile} />
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
