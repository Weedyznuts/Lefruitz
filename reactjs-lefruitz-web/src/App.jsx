import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './components/login';
import Profile from './components/profile';
import UserPage from './components/userpage';
import AdminPage from './components/adminpage';
import { PrivateRoute, AdminRoute, UserRoute } from './uts/privateRoute';
import Stock from './components/stockDetails';
import Home from './components/home';
import ProductRole from './components/productRole'
import './index.css';
function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productrole/:id" element={<ProductRole/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path="/user" element={<UserRoute><UserPage/></UserRoute>}/>
        <Route path="/admin" element={<AdminRoute><AdminPage/></AdminRoute>}/>
        <Route path="/stockdetails/:id" element={<AdminRoute><Stock/></AdminRoute>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
