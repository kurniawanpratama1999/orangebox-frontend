import { useNavigate } from "react-router";
import { UiFormControl, UiFormInput } from "@/components/UiFormInput";

const DefaultFormInput = () => {
  return (
    <>
      <UiFormInput idName="name" label="Merchant Name" required={true} />
      <UiFormInput idName="desc" label="Phone or Link" required={true} />
    </>
  );
};

export const MerchantFormControl = () => {
  const navigate = useNavigate();
  return (
    <UiFormControl
      formTitle={"Merchant"}
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
