import { Navigate } from "react-router-dom";
import { useAuthUser } from "./hooksUser/useAuthUser";
/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRouteUser = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn, isRefreshing } = useAuthUser();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
