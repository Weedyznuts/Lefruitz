import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './components/login';
import Profile from './components/profile';
import UserPage from './components/userpage';
import AdminPage from './components/adminpage';
import { PrivateRoute, AdminRoute } from './uts/privateRoute';
import Home from './components/home';
import './index.css';
function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path="/user" element={<PrivateRoute><UserPage/></PrivateRoute>}/>
        <Route path="/admin" element={<AdminRoute><AdminPage/></AdminRoute>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
