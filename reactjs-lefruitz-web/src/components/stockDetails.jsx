import React from 'react';
import Menu from './menuAdmin';
import Footer from './footer';
import { useEffect,useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../index.css';

const PopupWindow=()=>(
  <Popup>
    
  </Popup>
);

export default function details({variable}) {
  const [Visible,setVisible]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  const token=localStorage.getItem('role');
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  }
  /*if (token=='user') {
    handleUser;
  }
  if (token=='admin') {

  }*/
  if (token!='admin'||token!='user') {
    handleLogout;
  }
  /*const handleUser=()=>{
   navigate(`/shopDetails/${id}`)
  }
  const handleAdmin=()=>{

  }*/
  
  const [product,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [namaProduct,setnamaProduct]=useState(product.nama_product);
  const [descriptionProduct,setdescriptionProduct]=useState();
  const [stock,setstock]=useState();
  const [purchasePrice,setpurchasePrice]=useState();
  const [sellingPrice,setsellingPrice]=useState();

  useEffect(()=>{
    const fetchProduct=async ()=>{
      try {
        const response= await fetch(`http://127.0.0.1:3000/stockDetails/${id}`);
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
    const handleStock=async(e)=>{
      e.preventDefault();
      try {
        const response=await fetch(`http://127.0.0.1:3000/editData/${id}`,{
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({namaProduct,descriptionProduct,stock}),
          });
      }
      catch (error) {
        console.log(error);
      }
    };
    const handlePrice=()=>{

    };
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
            <h5>stock:{item.stock}</h5>
            <form>
             {/*<button type='submit' onClick={()=>setVisible(true)}>Edit</button>*/}
            </form>
            <Popup trigger={<button className='button'>Edit</button>} modal nested className='popup-content'>
              {close => (
                <div className='modal'>
                 <div className='popup-header'> Edit stock </div>
                  <form>
                    <div className="popup-alignment">
                      <h4>Product Name:</h4>
                      <input type='text' value={item.nama_product} onChange={(e)=>setnamaProduct(e.target.value)}/>      
                    </div>
                    <div className="popup-alignment">
                      <h4>Description:</h4>
                      <input type='text' value={item.description_product} onChange={(e)=>setdescriptionProduct(e.target.value)}/>
                    </div>
                    <div className="popup-alignment">
                      <h4>Stock:</h4>
                      <input type='text' value={item.stock} onChange={(e)=>setstock(e.target.value)}/>
                    </div>
                    <button className='button-save' onClick={handleStock}>Save</button>
                  </form>
                </div>
              )}
            </Popup>
            <Popup trigger={<button className="button">Edit Price</button>}modal nested className='popup-content'>
              {close => (
                <div className='modal'>
                  <div className='popup-header'> Edit Price </div>
                  <form>
                    <div className="popup-alignment">
                      <h4>Purchase Price:</h4>
                      <input type='text' value={item.purchase_price} onChange={(e)=>setpurchasePrice(e.target.value)}/>      
                    </div>
                    <div className="popup-alignment">
                      <h4>Selling Price:</h4>
                      <input type='text' value={item.selling_price} onChange={(e)=>setsellingPrice(e.target.value)}/>
                    </div>
                    <button className='button-save' onClick={handlePrice}>Save</button>
                  </form>
                </div>
              )}
            </Popup>          
          </div>
      </div>
      ))}
      </div>
      <Footer/>
    </div>
    );
}