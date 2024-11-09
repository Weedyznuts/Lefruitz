import React from 'react';
import Menu from './menu';
import Footer from './footer';
import '../signin.css';

export default function signin() {
    return(
    <div className='App'>
      <Menu/>
      <div className="formContainer2">
        <div className="form2">
          <form>
          <h4>Name</h4>
            <input name="name-insert2" placeholder='please type here'></input>
            <h4>Email</h4>
            <input name="email-insert2" placeholder='please type here'></input>
            <h4>Password</h4>
            <input name="password-insert2" placeholder='please type here' type='password'></input>
            <button type='submit'>Sign up</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
    )
}