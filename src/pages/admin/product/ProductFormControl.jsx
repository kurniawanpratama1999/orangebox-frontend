import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { UiFormControl, UiFormInput } from "@/components/UiFormInput";

const DefaultFormInput = () => {
  return (
    <>
      <UiFormInput idName="name" label="Product Name" required={true} />

      <UiFormInput idName="category" label="Category" required={true} />

      <UiFormInput idName="price" label="Price" required={true} />

      <UiFormInput idName="desc" label="Short Description" />

      <fieldset className="border border-neutral-400 bg-neutral-100">
        <legend className="ml-3 border border-neutral-400 px-2 bg-neutral-100">
          Is Populer ?
        </legend>
        <div className="px-2 py-1 flex flex-row gap-x-5">
          <label htmlFor="is_populer" className="flex gap-x-1">
            <input
              type="radio"
              name="is_populer"
              id="is_populer_false"
              defaultChecked="1"
            />
            <span>No</span>
          </label>
          <label htmlFor="is_populer" className="flex gap-x-1">
            <input type="radio" name="is_populer" id="is_populer_true" />
            <span>Yes</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="border border-neutral-400 bg-neutral-100">
        <legend className="ml-3 border border-neutral-400 px-2 bg-neutral-100">
          Is Recommended ?
        </legend>
        <div className="px-2 py-1 flex flex-row gap-x-5">
          <label htmlFor="is_recommended" className="flex gap-x-1">
            <input
              type="radio"
              name="is_recommended"
              id="is_recommended_false"
              defaultChecked="1"
            />
            <span>No</span>
          </label>
          <label htmlFor="is_recommended" className="flex gap-x-1">
            <input
              type="radio"
              name="is_recommended"
              id="is_recommended_true"
            />
            <span>Yes</span>
          </label>
        </div>
      </fieldset>
    </>
  );
};

export const ProductFormControl = () => {
  const navigate = useNavigate();
  return (
    <UiFormControl
      formTitle={"Product"}
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
