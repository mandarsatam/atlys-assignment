import Register from "../../components/Register/Register";
import LoginIcon from "../../assets/loginIcon.svg"
import { useLocation } from "react-router-dom";
import { RegisterPageLogo, RegisterPageLogoContainer } from "./RegisterPage.styled";

const RegisterPage = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <RegisterPageLogoContainer>
        <RegisterPageLogo src={LoginIcon} />
      </RegisterPageLogoContainer>
      <Register type={pathname === "/register" ? "root" : "feed"} />
    </>
  );
};

export default RegisterPage;
