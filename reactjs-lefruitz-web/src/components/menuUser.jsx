import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { black, white } from '@mui/material/colors';
//const theme = createTheme({
//  palette: {
//  primary: black,
//  secondary: white,
//  },
//});
export default function menuUser() {
  const navigate=useNavigate();
  const token=localStorage.getItem('role');
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  }
  if (token!='user') {
    handleLogout();
  }
  return (
    <nav>
      <div className='navigation-home'>
        <Link to ="/">lefruitz.com</Link>
      </div>
      <div className='navigation-menu'>
        <Link to='/contactus'>Contact Us</Link>
        <a href=''>Settings</a>
        <a href=''>Page</a>
        <Box sx={{'& button':{mr:1,mt:-1}}}>
            <Button onClick={handleLogout} variant='contained' size='small'>
              Log Out
            </Button>
        </Box>
      </div>
    </nav>
  )
}