import { Link, useLocation } from "react-router-dom";
import { RegisterContainer } from "./Register.styled";

const Register = () => {
  const location = useLocation();
  const { pathname } = location;

  const handleOnClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <RegisterContainer onClick={handleOnClick}>
      <h3>SIGN UP</h3>
      <h2>Create an account to continue</h2>
      <div>
        <label>Email</label>
        <input
          autoComplete="off"
          type="email"
          name="email"
          required
          placeholder="Enter your email or username"
        />
      </div>
      <div>
        <label>Username</label>
        <input
          autoComplete="off"
          type="text"
          name="email"
          required
          placeholder="Choose a preferred username"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          autoComplete="off"
          type="text"
          name="email"
          required
          placeholder="Choose a strong password"
        />
      </div>
      <div>
        <Link to={`/feed`}>
          <button>Continue</button>
        </Link>
      </div>
      <div>
        {pathname === "/register" ? (
          <Link to={`/login`}>
            <span>Already have an account?</span>
            <span>Login</span>
          </Link>
        ) : (
          <Link to={`/feed/login`}>
            <span>Already have an account?</span>
            <span>Login</span>
          </Link>
        )}
      </div>
    </RegisterContainer>
  );
};

export default Register;
