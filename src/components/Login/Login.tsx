import { Link } from "react-router-dom";
import {
  FormItemInput,
  FormItemLabel,
  FormItemLabelContainer,
  FormPasswordIcon,
  FormSubmitBtn,
  LinkContainer,
  LoginContainer,
  LoginFormItem,
  LoginSubTitle,
  LoginTitle,
  StyledLink,
} from "./Login.styled";
import PasswordEye from "../../assets/eye.svg";

const Login = ({ type }: { type: string }) => {
  const handleOnClick = (e: any) => {
    e.stopPropagation();
    console.log("Click");
  };

  return (
    <LoginContainer onClick={handleOnClick}>
      <LoginSubTitle>WELCOME BACK</LoginSubTitle>
      <LoginTitle>Login to your account</LoginTitle>
      <LoginFormItem>
        <FormItemLabelContainer>
          <FormItemLabel>Email or Username</FormItemLabel>
        </FormItemLabelContainer>
        <FormItemInput
          autoComplete="off"
          type="email"
          name="email"
          required
          placeholder="Enter your email or username"
        />
      </LoginFormItem>
      <LoginFormItem>
        <FormItemLabelContainer>
          <FormItemLabel>Password</FormItemLabel>
          <FormItemLabel>Forgot Password?</FormItemLabel>
        </FormItemLabelContainer>
        <FormItemInput
          autoComplete="off"
          type="email"
          name="email"
          required
          placeholder="Enter your password"
        />
        <FormPasswordIcon src={PasswordEye} />
      </LoginFormItem>
      <div>
        <Link to={`/feed`}>
          <FormSubmitBtn>Login now</FormSubmitBtn>
        </Link>
      </div>
      <LinkContainer>
        <StyledLink to={type === "root" ? `/register` : `/feed/register`}>
          <span>Not registered yet? </span>
          <span className="highlight">Register →</span>
        </StyledLink>
      </LinkContainer>
    </LoginContainer>
  );
};

export default Login;
