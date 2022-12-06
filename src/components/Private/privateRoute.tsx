import { selectAuth } from "@store/Slices/secSlice";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function PrivateRoute({
  children,
  allowedRoles = [],
}: PropsWithChildren<{ allowedRoles?: string[] }>) {
  const user = useSelector(selectAuth);

  if (user) {
    try {
      if (!user.token) {
        return <Navigate to={"/login"} replace />;
      }
    } catch (error) {
      return <Navigate to={"/login"} replace />;
    }
  }
  return children ? <>{children}</> : <Outlet />;
}

export default PrivateRoute;
