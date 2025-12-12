import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Profile() {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Profile Page</h2>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/profile/details">Profile Details</Link> | 
        <Link to="/profile/settings"> Profile Settings</Link>
      </nav>
      <button onClick={logout}>Logout</button>
      <hr />
      <Outlet />
    </div>
  );
}

export default Profile;