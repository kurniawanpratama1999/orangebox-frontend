import { UiFormControl, UiFormInput } from "@/components/UiFormInput";
import { useNavigate } from "react-router";

const DefaultFormInput = () => {
  return (
    <>
      <UiFormInput idName="name" label="Product Name" required={true} />
      <UiFormInput idName="category_id" label="Category Name" required={true} />
    </>
  );
};

export const CategoryFormControl = () => {
  const navigate = useNavigate();
  return (
    <UiFormControl
      formTitle={"Category"}
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
              isUpdate ? "bg-indigo-600" : "bg-emerald-600",
              "text-white px-2 py-1 rounded",
            ].join(" ")}>
            Save {isUpdate && "change"}
          </button>
        </>
      )}
    />
  );
};
