import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Edit from './pages/Edit';
import Blog from './pages/Blog';
import EditBlog from './pages/EditBlog';
import Member from './pages/Member';
import { useAuthContext } from './hooks/useAuthContext'
import { AuthContextProvider } from './context/AuthContext';

function App() {

  const { user } = useAuthContext()

  const LocationAwareNavbar = () => {
    const location = useLocation();
    const hideNavbarPaths = [
        '/login',
        '/register',
        '/create',
        '/profile',
        '/edit',
        '/member'
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
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}  />
              <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />}  />
              <Route path='/create' element={<Create />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/edit' element={<Edit />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path='/editblog/:id' element={<EditBlog />} />
              <Route path='/member' element={<Member />} />
            </Routes>
          </div>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
