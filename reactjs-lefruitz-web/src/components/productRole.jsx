import React from 'react';
import ShopDetails from './details';
import Stock from './stockDetails';
import Login from './login';
import Home from './home';
import {useParams} from 'react-router-dom';

function productRole() {
  const {variable}=useParams();
  const role=localStorage.getItem('role');
  console.log(`init ${role}`)
  if (role==='admin') {
    return <Stock variable={variable}/>
  }
  else if (role==='user') {
    return <ShopDetails variable={variable}/>
  }
  else {
    return <Login/>
  }
}



export default productRole