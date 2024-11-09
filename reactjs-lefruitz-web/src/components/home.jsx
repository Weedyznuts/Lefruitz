import React from 'react'
import Menu from './menu';
import Hero from './hero';
import Product from './product';
import More from './more';
import Footer from './footer';

function home() {
  return (
    <div className='App'>
      <Menu/>
      <Hero/>
      <Product/>
      <More/>
      <Footer/>
    </div>
  )
}

export default home