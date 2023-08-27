import { Link } from "react-router-dom";
import {
  FormItemInput,
  FormItemLabel,
  FormItemLabelContainer,
  FormPasswordIcon,
  FormSubmitBtn,
  LinkContainer,
  RegisterContainer,
  RegisterFormItem,
  RegisterSubTitle,
  RegisterTitle,
  StyledLink,
} from "./Register.styled";
import PasswordEye from "../../assets/eye.svg";

const Register = ({ type }: { type: string }) => {
  const handleOnClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <RegisterContainer onClick={handleOnClick}>
      <RegisterSubTitle>SIGN UP</RegisterSubTitle>
      <RegisterTitle>Create an account to continue</RegisterTitle>
      <RegisterFormItem>
      <FormItemLabelContainer>
          <FormItemLabel>Email</FormItemLabel>
        </FormItemLabelContainer>
        <FormItemInput
          autoComplete="off"
          type="email"
          name="email"
          required
          placeholder="Enter your email or username"
        />
      </RegisterFormItem>
      <RegisterFormItem>
        <FormItemLabelContainer>
          <FormItemLabel>Username</FormItemLabel>
        </FormItemLabelContainer>
        <FormItemInput
          autoComplete="off"
          type="text"
          name="email"
          required
          placeholder="Choose a preferred username"
        />
      </RegisterFormItem>
      <RegisterFormItem>
        <FormItemLabelContainer>
          <FormItemLabel>Password</FormItemLabel>
        </FormItemLabelContainer>
        <FormItemInput
          autoComplete="off"
          type="text"
          name="email"
          required
          placeholder="Choose a strong password"
        />
        <FormPasswordIcon src={PasswordEye} />
      </RegisterFormItem>
      <Link to={`/feed`}>
        <FormSubmitBtn>Register</FormSubmitBtn>
      </Link>
      <LinkContainer>
        <StyledLink to={type === "root" ? `/login` : `/feed/login`}>
          <span>Already have an account? </span>
          <span className="highlight">Login →</span>
        </StyledLink>
      </LinkContainer>
    </RegisterContainer>
  );
};

export default Register;
