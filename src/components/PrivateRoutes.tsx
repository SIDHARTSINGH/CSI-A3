import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store";

const PrivateRoutes = () => {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  console.log(isLoggedIn);

  if (!isLoggedIn) return <Navigate to={"/sign-up"} />;
  return <Outlet />;
};

export default PrivateRoutes;
