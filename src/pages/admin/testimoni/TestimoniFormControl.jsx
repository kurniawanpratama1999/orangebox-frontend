import { useNavigate, useParams } from "react-router";
import {
  UiFormControl,
  UiFormImage,
  UiFormInput,
} from "@/components/UiFormInput";
import { useEffect, useRef, useState } from "react";
import { useAxios } from "@/store/useAxios.js";

const DefaultFormInput = ({ data }) => {
  const { imageUrl, setImageFile } = data;
  const { name, setName } = data;
  const { description, setDescription } = data;
  return (
    <>
      <UiFormImage imageUrl={imageUrl} setImageFile={setImageFile} />
      <UiFormInput
        idName="name"
        label="Nama Lengkap"
        required={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <UiFormInput
        idName="description"
        label="Apa kata mereka"
        required={true}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </>
  );
};

export const TestimoniFormControl = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const getData = {
    imageUrl,
    name,
    description,
  };

  const setData = {
    setImageFile,
    setName,
    setDescription,
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("photo", imageFile);
      formData.append("name", name);
      formData.append("description", description);

      const response = await useRefreshAxios.post(`/testimony`, formData);
      const { message } = response.data;

      handler.openModal(message, {
        type: "success",
        navigate: "/admin/product",
      });
    } catch (error) {
      const { message } = error.response.data;

      handler.openModal(message, {
        type: "failed",
      });
    }
  };
  const handleSaveChange = async () => {
    try {
      const formData = new FormData();
      formData.append("photo", imageFile);
      formData.append("name", name);
      formData.append("description", description);

      const response = await useRefreshAxios.put(`/testimony/${id}`, formData);
      const { message } = response.data;

      handler.openModal(message, {
        type: "success",
        navigate: "/admin/product",
      });
    } catch (error) {
      const { message } = error.response.data;

      handler.openModal(message, {
        type: "failed",
      });
    }
  };
  const handleDelete = async () => {
    try {
      const response = await useRefreshAxios.delete(`/testimony/${id}`);
      const { message } = response.data;

      handler.openModal(message, {
        type: "success",
        navigate: "/admin/product",
      });
    } catch (error) {
      const { message } = error.response.data;

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

  const fetchTestimony = useRef(null);
  useEffect(() => {
    if (fetchTestimony.current) return;
    fetchTestimony.current = true;
    if (id) {
      (async () => {
        try {
          const res = await useAxios(`/testimony/${id}`);
          const { results } = res.data;
          setName(results.name);
          setDescription(results.description);
          setImageUrl(results.photo);
        } catch (error) {
          console.log("failed for fetching testimony");
        }
      })();
    }
  }, []);
  return (
    <UiFormControl
      formTitle={"Testimoni"}
      renderInput={() => <DefaultFormInput data={{ ...getData, ...setData }} />}
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
            onClick={chooseHandler}
            type="button"
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
