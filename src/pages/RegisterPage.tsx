import Register from "../components/Register/Register";
import { LoginPageLogo, LoginPageLogoContainer } from "./LoginPage.styled";
import LoginIcon from "../assets/loginIcon.svg";
import { useLocation } from "react-router-dom";

const RegisterPage = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <LoginPageLogoContainer>
        <LoginPageLogo src={LoginIcon} />
      </LoginPageLogoContainer>
      <Register type={pathname === "/register" ? "root" : "feed"} />
    </>
  );
};

export default RegisterPage;
