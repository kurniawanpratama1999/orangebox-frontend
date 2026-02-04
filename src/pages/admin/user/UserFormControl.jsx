import { useNavigate, useParams } from "react-router";
import { UiFormControl } from "@/components/UiFormInput";
import { useEffect, useState } from "react";
import { useRefreshAxios } from "@/store/useRefreshAxios.js";
import { useModal } from "@/context/ModalContext.jsx";
import { DefaultFormInput } from "./components/DefaultFormInput.jsx";
import { cn } from "tailwind-variants";
import { PasswordFormInput } from "./components/PasswordFormInput.jsx";
import { useAuth } from "@/context/AuthContext.jsx";

export const UserFormControl = () => {
  // CONTEXT
  const { setUser } = useAuth();
  // STATES
  // SET FOR INPUT
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  // SET FOR UPDATE PASSWORD
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // STATUS -> "IDLE" | "LOADING" | "SUCCESS" | "ERROR"
  const [status, setStatus] = useState("IDLE");

  // STATUS MESSAGE -> get from error
  const [errorMessage, setErrorMessage] = useState(null);

  // NAVIGATE
  const navigate = useNavigate();

  // FROM CONTEXT
  const { handler } = useModal();

  // PARAMS
  const params = useParams();

  // PARAMS
  const id = params.id;

  const getUsers = async () => {
    setStatus("LOADING");

    try {
      const res = await useRefreshAxios.get(`/user/${id}`);

      setStatus("SUCCESS");

      const { results } = res.data;
      setName(results.name);
      setUsername(results.username);
      setImageUrl(results.photo);
    } catch (error) {
      setStatus("ERROR");
      setErrorMessage("INTERNAL SERVER ERROR");
    }
  };

  // RUNNING GET USER
  useEffect(() => {
    if (id) {
      getUsers();
    } else {
      setStatus("SUCCESS");
    }
  }, []);

  // HANDLERS
  // FOR CHANGE FROM UPDATE NAME & USERNAME TO PASSWORD & PASSWORD CONFIRM
  const toggleFormControl = () => {
    setIsUpdatePassword(!isUpdatePassword);
  };

  // FOR CREATE
  const handleSave = async () => {
    handler.openModal("Loading . . .", {
      type: "info",
    });

    try {
      const formData = new FormData();

      formData.append("photo", imageFile);
      formData.append("name", name);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("password_confirmation", passwordConfirm);

      await useRefreshAxios.post(`/user`, formData);
      handler.closeModal();

      handler.openModal("Berhasil tambah user", {
        type: "success",
        navigate: "/admin/user",
      });
    } catch (error) {
      console.log(error.response.data);
      handler.openModal("Gagal tambah user", {
        type: "failed",
      });
    }
  };

  // FOR UPDATE
  const handleSaveChange = async () => {
    try {
      const formData = new FormData();
      formData.append("photo", imageFile);
      formData.append("name", name);
      formData.append("username", username);

      const saveChange = await useRefreshAxios.put(`/user/${id}`, formData);
      const results = saveChange.data.results;
      setUser({ ...results });
      handler.openModal("Berhasil update user", {
        type: "success",
        navigate: "/admin/user",
      });
    } catch (error) {
      handler.openModal("Gagal update user", {
        type: "failed",
      });
    }
  };

  // WHEN UPDATE PASSWORD
  const handleChangePassword = async () => {
    try {
      await useRefreshAxios.patch(`/user/${id}`, {
        password,
        password_confirmation: passwordConfirm,
      });

      handler.openModal("Berhasil update password user", {
        type: "success",
        navigate: "/admin/user",
      });
    } catch (error) {
      handler.openModal("Gagal update password user", {
        type: "failed",
      });
    }
  };

  // FOR DELETE
  const handleDelete = async () => {
    try {
      await useRefreshAxios.delete(`/user/${id}`);

      handler.openModal("Berhasil hapus user", {
        type: "success",
        navigate: "/admin/user",
      });
    } catch (error) {
      handler.openModal("Gagal hapus user", {
        type: "failed",
      });
    }
  };

  const chooseHandler = async () => {
    if (id && !isUpdatePassword) {
      return await handleSaveChange();
    }

    if (id && isUpdatePassword) {
      return await handleChangePassword();
    }

    return await handleSave();
  };
  return (
    <UiFormControl
      formTitle={"User"}
      renderInput={() => {
        if (status == "SUCCESS") {
          return (
            <>
              {!isUpdatePassword && (
                <DefaultFormInput
                  data={{
                    name,
                    username,
                    setName,
                    setUsername,
                    imageUrl: imageUrl,
                    setImageFile: setImageFile,
                  }}
                />
              )}
              {(isUpdatePassword || !id) && (
                <PasswordFormInput
                  data={{
                    password,
                    passwordConfirm,
                    setPassword,
                    setPasswordConfirm,
                  }}
                />
              )}
              {id && (
                <button
                  type="button"
                  onClick={toggleFormControl}
                  className="text-sm block w-fit mx-auto text-blue-600">
                  {isUpdatePassword ? "Cancel it !" : "Change Password ?"}
                </button>
              )}
            </>
          );
        }

        if (status == "ERROR") {
          return <p>{errorMessage}</p>;
        }

        return <p>{status}</p>;
      }}
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
            onClick={async () => await chooseHandler()}
            className={cn(
              isUpdate ? "bg-indigo-600" : "bg-emerald-600",
              "text-white px-2 py-1 rounded",
            )}>
            {id && isUpdatePassword
              ? "Save New Password"
              : id && !isUpdatePassword
                ? "Save Change"
                : "Save"}
          </button>
        </>
      )}
    />
  );
};
