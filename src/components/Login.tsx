import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h3>WELCOME BACK</h3>
      <h2>Login to your account</h2>
      <div>
        <label>Email or Username</label>
        <input
          autoComplete="off"
          type="email"
          name="email"
          required
          placeholder="Enter your email or username"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          autoComplete="off"
          type="email"
          name="email"
          required
          placeholder="Enter your password"
        />
      </div>
      <div>
        <Link to={`feed`}>
          <button>Login now</button>
        </Link>
      </div>
      <div>
        <span>Not registered yet?</span>
        <span>Register</span>
      </div>
    </div>
  );
};

export default Login;
