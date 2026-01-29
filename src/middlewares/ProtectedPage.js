import { useNavigate } from "react-router";

export const ProtectedPage = () => {
  const navigation = useNavigate();
  const isAuth = false;
  return !isAuth && navigation("/auth");
};
