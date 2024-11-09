import React from 'react'
import { FaInstagram, FaFacebook } from "react-icons/fa";


export default function footer() {
 return (
    <div className='footer-container'>
        <div className="footer-socials">
            <h3>lefruitz.com</h3>
            <div className="icon-position">
                <FaInstagram size={20}/>
                <span>  </span>
                <FaFacebook size={20}/>
            </div>
        </div>
        <div className="footer-contact-list">
            <h3>Contact List</h3>
            <div className="contact-container">
                <div className="contact-left">
                    <h3>Phone Number</h3>
                    <h3>Facebook</h3>
                    <h3>Instagram</h3>
                </div>
                <div className="contact-right">
                    <h3>+62 833 4212 987</h3>
                    <h3>lefruitzshop</h3>
                    <h3>@lefruitzykaboom</h3>
                </div>
            </div>
        </div>
    </div>
 )
}