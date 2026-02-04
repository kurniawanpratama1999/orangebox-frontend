import { UiFormControl, UiFormInput } from "@/components/UiFormInput";
import { useModal } from "@/context/ModalContext.jsx";
import { useRefreshAxios } from "@/store/useRefreshAxios.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const DefaultFormInput = ({ data }) => {
  const { name, setName } = data;
  const { description, setDescription } = data;

  return (
    <>
      <UiFormInput
        idName={"name"}
        label={"Category Name"}
        required={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <UiFormInput
        idName={"description"}
        label={"Description"}
        required={true}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </>
  );
};

export const CategoryFormControl = () => {
  // STATES
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // CONTEXT
  const { handler } = useModal();

  // NAVIGATE
  const navigate = useNavigate();

  // PARAMS
  const params = useParams();
  const id = params.id;

  // HANDLERS
  const handleSave = async () => {
    try {
      const res = await useRefreshAxios.post(`/category/`, {
        name,
        description,
      });
      if (res.status.toString().startsWith("2")) {
        const message = res.data.message;
        handler.openModal(message, {
          type: "success",
          navigate: "/admin/category",
        });
      }
    } catch (error) {
      const res = error.response.data;
      const message = res.message;

      handler.openModal(message, {
        type: "failed",
      });
    }
  };

  const handleSaveChange = async () => {
    try {
      const res = await useRefreshAxios.put(`/category/${id}`, {
        name,
        description,
      });
      if (res.status == 200) {
        const message = res.data.message;
        handler.openModal(message, {
          type: "success",
          navigate: "/admin/category",
        });
      }
    } catch (error) {
      const res = error.response.data;
      const message = res.message;

      handler.openModal(message, {
        type: "failed",
      });
    }
  };

  const handleDelete = async () => {
    try {
      const res = await useRefreshAxios.delete(`/category/${id}`);
      if (res.status == 200) {
        const message = res.data.message;
        handler.openModal(message, {
          type: "success",
          navigate: "/admin/category",
        });
      }
    } catch (error) {
      const res = error.response.data;
      const message = res.message;

      handler.openModal(message, {
        type: "failed",
      });
    }
  };

  const chooseHandler = async () => {
    if (id) {
      await handleSaveChange();
      return;
    }

    await handleSave();
  };

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await useRefreshAxios.get(`/category/${id}`);
          const results = res.data.results;

          setName(results.name);
          setDescription(results.description);
        } catch (error) {
          handler.openModal(message, {
            type: "failed",
            navigate: "/admin/category",
          });
        }
      })();
    }
  }, []);
  return (
    <UiFormControl
      formTitle={"Category"}
      renderInput={() => (
        <DefaultFormInput
          data={{ name, setName, description, setDescription }}
        />
      )}
      renderAction={(isUpdate) => (
        <>
          {isUpdate && (
            <button
              onClick={handleDelete}
              type="button"
              className="text-red-600">
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
            type="button"
            onClick={chooseHandler}
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
