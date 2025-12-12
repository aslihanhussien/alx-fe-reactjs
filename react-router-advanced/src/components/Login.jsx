import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/profile');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>You need to login to access protected routes</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;