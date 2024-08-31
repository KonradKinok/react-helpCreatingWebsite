
import { useAuthUser } from "./hooksUser/useAuthUser";
import { Navigate } from "react-router-dom";

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRouteUser = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuthUser();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
