import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { UiFormInput } from "@/components/UiFormInput";

const DefaultFormInput = () => {
  return (
    <>
      <UiFormInput idName="name" label="Product Name" required={true} />
    </>
  );
};

export const CategoryFormControl = () => {
  // HOOKS
  const params = useParams();
  const navigate = useNavigate();
  const elForm = useRef(null);

  // LOGICS
  const isUpdate = Boolean(params.id);

  return (
    <main className="pt-12">
      <section>
        <div className="w-full max-w-xs mx-auto min-[320px]:shadow min-[320px]:pt-4">
          <div
            className={[
              isUpdate ? "bg-indigo-500" : "bg-emerald-500",
              "font-bold text-xl py-1 px-2 text-white shadow",
            ].join(" ")}>
            {isUpdate ? "Form Update Category" : "Form New Category"}
          </div>
          <form ref={elForm} className="mt-3 space-y-3 px-3 pb-3">
            <DefaultFormInput />

            <div className="text-sm font-semibold flex gap-x-2 justify-end mt-6">
              <button
                type="button"
                onClick={() => {
                  navigate("/admin/category");
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
