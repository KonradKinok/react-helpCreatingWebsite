import { Helmet } from "react-helmet";
import { LoginFormUser } from "../components/LoginFormUser/LoginFormUser";
export default function LoginUser() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginFormUser />
    </div>
  );
}
