import {
  UiList,
  UiListAvatar,
  UiTitleAndSearch,
} from "@/components/UiListTable";
import { useRefreshAxios } from "@/store/useRefreshAxios.js";
import { useEffect, useState } from "react";

export const UserDataList = () => {
  // STATES
  const [users, setUsers] = useState([]);

  // STATUS -> "IDLE" || "LOADING" || "SUCCESS" || "ERROR"
  const [status, setStatus] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  const getUsers = async () => {
    try {
      const res = await useRefreshAxios.get("/user");

      setStatus("SUCCESS");
      setUsers(res.data.results);
    } catch (e) {
      setStatus("ERROR");
      setErrorMessage("INTERNAL SERVER ERROR");
    }
  };

  // EFFECTS
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <UiTitleAndSearch
        title="User Aktif"
        searchId="q_user"
        placeholder="Cari user"
      />

      {status === "SUCCESS" ? (
        <UiList
          datas={users}
          renderItems={(user) => (
            <div className="w-full">
              <p className="text-sm font-semibold ">{user.name}</p>
              <p className="text-xs italic">{user.username}</p>
            </div>
          )}
          renderAvatar={(user) => <UiListAvatar image={user.photo} />}></UiList>
      ) : status == "ERROR" ? (
        <p>{errorMessage}</p>
      ) : (
        <p>{status}</p>
      )}
    </>
  );
};
