import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const WasherLogin = () => {
    let navigate = useNavigate();
    return (
        <div className='input'>
            <h1 className='title1a'>WASHER LOGIN</h1>
            <div className='just-for-flex'>
            <div className="loginForm">
            <div className="name">
          <div className="input-form-section">
          <div><label>Username</label></div>
          <div><input
            type="text"
            placeholder="Enter Username"
          /></div></div>
          <div className="input-form-section">
          <div><label>Password</label></div>
          <div><input
            type="password"
            placeholder="Enter Password"
          /></div></div>
        </div>
                <button className="submit-btn" onClick={() => { navigate('/washerhome') }}>Login</button>
            </div>
            
            </div>
            <Footer />
        </div>
    )
}

export default WasherLogin;