import { useNavigate, useParams } from "react-router";
import {
  UiFormControl,
  UiFormImage,
  UiFormInput,
} from "@/components/UiFormInput";
import { useEffect, useState } from "react";
import { useAxios } from "@/store/useAxios.js";
import { useModal } from "@/context/ModalContext.jsx";
import { useRefreshAxios } from "@/store/useRefreshAxios.js";

const DefaultFormInput = ({ data }) => {
  const { imageUrl, setImageFile } = data;
  const { name, setName } = data;
  const { description, setDescription } = data;
  const { link, setLink } = data;
  return (
    <>
      <UiFormImage
        idName="photo"
        imageUrl={imageUrl}
        setImageFile={setImageFile}
      />
      <UiFormInput
        idName="name"
        label="Sosmed Name"
        required={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <UiFormInput
        idName="description"
        label="Description"
        required={true}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <UiFormInput
        idName="link"
        label="Url"
        required={true}
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
    </>
  );
};

export const SosmedFormControl = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const getData = {
    imageUrl,
    name,
    description,
    link,
  };

  const setData = {
    setImageFile,
    setName,
    setDescription,
    setLink,
  };

  const navigate = useNavigate();
  const { handler } = useModal();
  const params = useParams();
  const id = params.id;

  const handlerSubmit = () => {
    const formData = new FormData();
    formData.append("photo", imageFile);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("link", link);

    return {
      save: async () => {
        try {
          const response = await useRefreshAxios.post(`/sosmed`, formData);

          handler.openModal(response.data.message, {
            type: "success",
            navigate: "/admin/sosmed",
          });
        } catch (error) {
          const message = error.response.message;
          handler.openModal(message, {
            type: "failed",
          });
        }
      },

      updated: async () => {
        try {
          const response = await useRefreshAxios.put(`/sosmed/${id}`, formData);

          handler.openModal(response.data.message, {
            type: "success",
            navigate: "/admin/sosmed",
          });
        } catch (error) {
          const message = error.response.message;
          handler.openModal(message, {
            type: "failed",
          });
        }
      },

      deleted: async () => {
        try {
          const response = await useRefreshAxios.delete(`/sosmed/${id}`);

          handler.openModal(response.data.message, {
            type: "success",
            navigate: "/admin/sosmed",
          });
        } catch (error) {
          const message = error.response.message;
          handler.openModal(message, {
            type: "failed",
          });
        }
      },
    };
  };

  const chooseHandler = async () => {
    if (id) {
      await handlerSubmit().updated();
      return;
    }

    await handlerSubmit().save();
  };

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const response = await useAxios.get("/sosmed");
          const { results } = response.data;

          setName(results.name);
          setDescription(results.description);
          setLink(results.link);
          setImageUrl(results.photo);
        } catch (error) {
          console.log("failed for fetching sosmeds");
        }
      })();
    }
  }, []);

  return (
    <UiFormControl
      formTitle={"Sosmed"}
      renderInput={() => <DefaultFormInput data={{ ...getData, ...setData }} />}
      renderAction={(isUpdate) => (
        <>
          {isUpdate && (
            <button
              onClick={async () => handlerSubmit().deleted()}
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
