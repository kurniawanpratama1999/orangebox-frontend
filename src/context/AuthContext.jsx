import { useAxios } from "@/store/useAxios.js";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState("LOADING");
  const fetch = useRef(null);

  const doFetch = async () => {
    try {
      const fetching = await useAxios.get("/auth/remember-me");
      const statusCode = fetching.status;
      console.log(statusCode);
      if (statusCode == 202) {
        setUser(fetching.data.results);
        setIsAuth("ACCEPTED");
      }
    } catch (error) {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    if (fetch.current) return;
    fetch.current = true;
    doFetch();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
