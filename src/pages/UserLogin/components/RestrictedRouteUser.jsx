
import { useAuthUser } from "./hooksUser";
import { Navigate } from "react-router-dom";

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRouteUser = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuthUser();
  console.log("RestrictedRouteUser->isLoggedIn", isLoggedIn);
  console.log("RestrictedRouteUser->Component", Component);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
