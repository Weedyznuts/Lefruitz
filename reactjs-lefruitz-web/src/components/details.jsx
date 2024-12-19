import React from 'react';
import Menu from './menuUser';
import Footer from './footer';
import { useEffect,useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Stock from './stockDetails';
import '../index.css';

export default function details() {
  const navigate=useNavigate();
  const {id}=useParams();
  const [product,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const fetchProduct=async ()=>{
      try {
        const response= await fetch(`http://127.0.0.1:3000/shopDetails/${id}`);
        const data= await response.json();
        console.log(data);
        setProducts(data.values);
      }
      catch(err){
        setError(err.message);
      }
    };
    fetchProduct();  
        //setProducts(data.values)
        //console.log(products)
  },[]);
    return (
    <div className='details-page'>
      <Menu/>
      <div className='details-container'>
      {product.map((item)=>(
        <div key={item.id_product} className='details-item'>
          <div className="details-image">
            <img src={item.image} alt=''/>
          </div>
          <div className='details-text'>
            <h4>
              {item.nama_product}
            </h4>
            <h5>{item.description_product}</h5>
            <h4>{item.selling_price}</h4>
            <form>
              <button type='submit'>Add to Cart</button>
            </form>

          </div>
      </div>
      ))}
      </div>
      <Footer/>
    </div>
    );
}