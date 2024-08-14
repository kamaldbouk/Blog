import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import EditBlog from './pages/EditBlog';
import { useAuthContext } from './hooks/useAuthContext'
import { AuthContextProvider } from './context/AuthContext';
import Error from './pages/Error';

function App() {

  const { user } = useAuthContext()
  console.log('User:', user); 
  const LocationAwareNavbar = () => {
    const location = useLocation();
    const hideNavbarPaths = [
        '/login',
        '/register',
        '/create',
        '/profile',
        '/edit',
        '/member',
        '/error'
    ];

    const isPathHidden = hideNavbarPaths.some(path => location.pathname.startsWith(path));
    
    return !isPathHidden ? <Navbar /> : null;
};

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <LocationAwareNavbar />
          <div className="pages">
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/error" />}  />
              <Route path='/register' element={!user ? <Register /> : <Navigate to="/error" />}  />
              <Route path='/create' element={user ? <Create /> : <Navigate to="/error" />} />
              <Route path='/profile' element={<Profile />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path='/editblog/:id' element={user ? <EditBlog /> : <Navigate to='/error' /> } />
              <Route path="/" element={<Home />} />
              <Route path='/error' element={<Error />} />
            </Routes>
          </div>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
