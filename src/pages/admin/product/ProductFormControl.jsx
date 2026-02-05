import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  UiFormControl,
  UiFormImage,
  UiFormInput,
  UiFormSelect,
} from "@/components/UiFormInput";
import { useModal } from "@/context/ModalContext.jsx";
import { useAxios } from "@/store/useAxios.js";
import { useRefreshAxios } from "@/store/useRefreshAxios.js";

const DefaultFormInput = ({ data }) => {
  const { name, setName } = data;
  const { category_id, setCategoryId } = data;
  const { price, setPrice } = data;
  const { description, setDescription } = data;
  const { is_new, setNew } = data;
  const { is_favorite, setFavorite } = data;
  const { imageUrl, setImageFile } = data;

  const [categories, setCategories] = useState([]);

  const fetchCategory = useRef(null);
  useEffect(() => {
    if (fetchCategory.current) return;
    fetchCategory.current = true;

    (async () => {
      try {
        const response = await useAxios("/category");

        const { results } = response.data;

        setCategories(results);
        setCategoryId(results[0].id);
      } catch (error) {
        console.log("fetching categories is failed");
      }
    })();
  }, []);
  return (
    <>
      <UiFormImage
        imageUrl={imageUrl}
        setImageFile={setImageFile}
        idName="photo"
      />

      <UiFormInput
        idName="name"
        label="Product Name"
        required={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <UiFormSelect
        idName="category_id"
        label="Category name"
        required={true}
        value={category_id}
        values={categories}
        onChange={(e) => {
          setCategoryId(e.target.value);
        }}
      />

      <UiFormInput
        idName="price"
        label="Price"
        required={true}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <UiFormInput
        idName="desc"
        label="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <fieldset className="border-2 border-black/10 bg-black/5 rounded">
        <legend className="ml-3 border-2 border-black/10 px-2 bg-neutral-200 rounded">
          New Product ?
        </legend>
        <div className="px-2 py-1 flex flex-row gap-x-5">
          <label htmlFor="is_new" className="flex gap-x-1">
            <input
              type="radio"
              name="is_new"
              id="is_new_false"
              checked={!is_new}
              onChange={(e) => setNew(false)}
            />
            <span>No</span>
          </label>
          <label htmlFor="is_new" className="flex gap-x-1">
            <input
              type="radio"
              name="is_new"
              id="is_new_true"
              checked={is_new}
              onChange={(e) => setNew(true)}
            />
            <span>Yes</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="border-2 border-black/10 bg-black/5 shadow">
        <legend className="ml-3 border-2 border-black/10 px-2 rounded bg-neutral-200">
          Favorite Product ?
        </legend>
        <div className="px-2 py-1 flex flex-row gap-x-5">
          <label htmlFor="is_favorite" className="flex gap-x-1">
            <input
              type="radio"
              name="is_favorite"
              id="is_favorite_false"
              checked={!is_favorite}
              onChange={(e) => setFavorite(false)}
            />
            <span>No</span>
          </label>
          <label htmlFor="is_favorite" className="flex gap-x-1">
            <input
              type="radio"
              name="is_favorite"
              id="is_favorite_true"
              checked={is_favorite}
              onChange={(e) => setFavorite(true)}
            />
            <span>Yes</span>
          </label>
        </div>
      </fieldset>
    </>
  );
};

export const ProductFormControl = () => {
  const [name, setName] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [is_new, setNew] = useState(false);
  const [is_favorite, setFavorite] = useState(false);

  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const getData = {
    name,
    category_id,
    price,
    description,
    is_new,
    is_favorite,
    imageUrl,
  };

  const setData = {
    setName,
    setCategoryId,
    setPrice,
    setDescription,
    setNew,
    setFavorite,
    setImageFile,
  };

  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const { handler } = useModal();

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("photo", imageFile);
      formData.append("name", name);
      formData.append("category_id", category_id);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("is_new", is_new);
      formData.append("is_favorite", is_favorite);

      const response = await useRefreshAxios.post(`/product`, formData);
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
      formData.append("category_id", category_id);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("is_new", is_new);
      formData.append("is_favorite", is_favorite);

      const response = await useRefreshAxios.put(`/product/${id}`, formData);
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
      const formData = new FormData();

      const response = await useRefreshAxios.delete(`/product`);
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

  const fetchProducts = useRef(null);

  useEffect(() => {
    if (fetchProducts.current) return;
    fetchProducts.current = true;

    (async () => {
      if (id) {
        try {
          const response = await useAxios.get(`/product/${id}`);
          const { results } = response.data;

          setImageUrl(results.photo);
          setName(results.name);
          setCategoryId(results.category_id);
          setDescription(results.description);
          setPrice(results.price);
          setNew(results.is_new);
          setFavorite(results.is_favorite);
        } catch (error) {
          console.log("failed for fetching products with id");
        }
      }
    })();
  }, []);

  return (
    <UiFormControl
      formTitle={"Product"}
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
