import { BiImage } from "@react-icons/all-files/bi/BiImage.js";
import axios from "axios";
import { useEffect, useState } from "react";

export const UploadPhoto = () => {
  const [filePhoto, setFilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const handleChangeFilePhoto = (target) => {
    const selectedFile = target.files[0];

    if (!selectedFile) return;

    setFilePhoto(selectedFile);
    setPreviewPhoto(URL.createObjectURL(selectedFile));
  };

  useEffect(() => {
    return () => {
      if (previewPhoto) {
        URL.revokeObjectURL(previewPhoto);
      }
    };
  }, [previewPhoto]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("photo", filePhoto);
      formData.append("firstname", "kurniawan");
      formData.append("lastname", "pratama");
      formData.append("age", 30);

      const res = await axios.post(
        "http://localhost:3001/api/upload",
        formData,
      );
      console.log(res.data);
    } catch (e) {
      console.error(e.response.data);
    }
  };
  return (
    <div className="w-fit mx-auto p-2 mt-2">
      <form
        onSubmit={submit}
        className="flex flex-col items-center gap-3 p-2 bg-neutral-100 shadow rounded">
        <label htmlFor="photo" className="w-[150px] h-[150px] relative">
          {!filePhoto ? (
            <div className="w-[150px] h-[150px] border flex-center">
              <BiImage className="text-4xl" />
            </div>
          ) : (
            <img src={previewPhoto} className="w-full h-full object-cover" />
          )}
          <input
            type="file"
            id="photo"
            name="photo"
            className="absolute top-0 left-0 bottom-0 right-0 hidden"
            placeholder=""
            onChange={({ target }) => handleChangeFilePhoto(target)}
          />
        </label>
        <p className="text-xs italic w-[150px]">{filePhoto?.name ?? ""}</p>
        <button
          className="mt-3 px-3 py-1 bg-emerald-400 rounded text-white w-full"
          type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};
