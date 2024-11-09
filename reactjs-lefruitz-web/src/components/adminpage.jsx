import { Link } from "react-router-dom";
import Menu from './menuAdmin';
import Hero from './hero';
import Product from './product';
import More from './more';
import Footer from './footer';
import '../index.css';

export default function adminpage(){
    return (
        <div className='adminpage'>
            <Menu/>
            <Hero/>
            <Product/>
            <More/>
            admin page
            <Footer/>
        </div>
    )
}