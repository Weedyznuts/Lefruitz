import { Link } from "react-router-dom";
import Menu from './menuUser';
import Hero from './hero';
import Product from './product';
import More from './more';
import Footer from './footer';
import '../index.css';

export default function userpage(){
    return (
        <div className='userpage'>
            <Menu/>
            <Hero/>
            <Product/>
            <More/>
            user page
            <Footer/>
        </div>
    )
}