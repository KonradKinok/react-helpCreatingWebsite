import { Helmet } from "react-helmet";
import { RegisterFormUser } from "../components/RegisterFormUser/RegisterFormUser";
export default function RegisterUser() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterFormUser />
    </div>
  );
}
