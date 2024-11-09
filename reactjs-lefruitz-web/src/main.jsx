import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home.jsx'
import Error from  './components/err.jsx'
import Contact from './components/contact.jsx'
import Login from './components/login.jsx'
import Signin from './components/signin.jsx'
import Details from './components/details.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import AdminPage from './components/adminpage.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/contactus',
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: '/loginpage',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/signinpage',
    element: <Signin />,
    errorElement: <Error />,
  },
  {
    path:'/shopDetails/:id',
    element: <Details />,
    errorElement: <Error />,
  },
  {
    path:'/admin',
    element: <AdminPage/>,
    errorElement: <Error/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
