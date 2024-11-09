import React from 'react'
import Box from '@mui/material/Box'
import Apple from '../assets/img/apple.jpeg';
import { useEffect,useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from '../uts/privateRoute';

export default function product() {
  const IsLoggedIn=window.localStorage.getItem('token');
  const UserType=window.localStorage.getItem('role');
  const[products, setProducts]=useState([]);
  const[error,setError]=useState(null);
  useEffect(()=>{
    const fetchData=async ()=>{
      try {
        const response= await fetch('http://127.0.0.1:3000/product');
        const data= await response.json();
        console.log(data);
        setProducts(data.values);
      }
      catch(err){
        setError(err.message);
      }
    };
    fetchData();  
        //setProducts(data.values)
        //console.log(products)
  },[]);
  return (
    <div className='browse-here'>
      <h3>Browse Here!</h3>
    <div className='product-container'>
      {products.map((item)=>(
        <div key={item.id_product} className='product-item'>
          <img src={item.image} alt=''/>
          <Link to={`/shopDetails/${item.id_product}`}>
            <h4>
              {item.nama_product}
            </h4>
          </Link>
          <h5>{item.description_product}</h5>
          <h4>{item.selling_price}</h4>
      </div>
      ))}
    </div>
    </div>
  )
}