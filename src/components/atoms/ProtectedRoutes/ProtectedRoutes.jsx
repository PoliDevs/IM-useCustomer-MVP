import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({children, redirectTo="/"}) {
  
  if (!localStorage.getItem("Pos")) return <Navigate to={redirectTo} />;

  return children ? children : <Outlet />;
}
