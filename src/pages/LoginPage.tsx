import Login from '../components/Login/Login'
import LoginIcon from '../assets/loginIcon.svg'
import { LoginPageLogo, LoginPageLogoContainer } from './LoginPage.styled'
import { useLocation } from 'react-router-dom';

const LoginPage = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
        <LoginPageLogoContainer>
          <LoginPageLogo src={LoginIcon} />
        </LoginPageLogoContainer>
        <Login type={pathname === "/login" ? 'root' : 'feed'}/>
    </>
  )
}

export default LoginPage