import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileDetails from './components/Profile/ProfileDetails';
import ProfileSettings from './components/Profile/ProfileSettings';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ padding: '20px' }}>
          <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <Link to="/">Home</Link> | 
            <Link to="/login"> Login</Link> | 
            <Link to="/profile"> Profile</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;