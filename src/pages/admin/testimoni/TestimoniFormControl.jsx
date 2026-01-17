import { useNavigate } from "react-router";
import { UiFormControl, UiFormInput } from "@/components/UiFormInput";

const DefaultFormInput = () => {
  return (
    <>
      <UiFormInput idName="name" label="Nama Lengkap" required={true} />
      <UiFormInput
        idName="description"
        label="Apa kata mereka"
        required={true}
      />
      <UiFormInput idName="job" label="Pekerjaan" required={true} />
    </>
  );
};

export const TestimoniFormControl = () => {
  const navigate = useNavigate();
  return (
    <UiFormControl
      formTitle={"Testimoni"}
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
