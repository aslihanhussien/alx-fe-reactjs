import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileSettings from './Profile/ProfileSettings';

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
      
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;