import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';           // user interface element that contains links to other sections of the website
import { RiLoginCircleFill,RiPriceTagFill,RiInformationFill,RiAdminFill,RiUserFill}from 'react-icons/ri';
import {AiFillHome} from 'react-icons/ai';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
 

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>

      <nav className="navbar navbar-expand navbar-dark bg-dark">

        
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home{" "}<AiFillHome size={20} style={{color:'#fff',verticalAlign: 'bottom' }}/>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/Services"} className='nav-link'>
              Packages{" "}<RiPriceTagFill size={20} style={{color:'#fff',verticalAlign: 'bottom' }}/>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/About"} className='nav-link'>
              About Us{" "}<RiInformationFill size={20} style={{color:'#fff',verticalAlign: 'bottom' }}/>
            </Link>
          </li>
        </div>

        <div className="ms-auto pe-md-5 navbar-nav">
        
          <li className='nav-item'>
            <Link to='/Login' className='nav-link'>
              User Login{" "}<RiLoginCircleFill size={20} style={{color:'#fff',verticalAlign: 'bottom' }}/>

            </Link>  
          </li>
          <li className='nav-item'>
            <Link to='/washerlog' className='nav-link'>
              Washer Login{" "}<RiUserFill size={20} style={{color:'#fff',verticalAlign: 'bottom' }}/>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/adminlog' className='nav-link'>
              Admin Login{" "}<RiAdminFill size={20} style={{color:'#fff',verticalAlign: 'bottom' }}/>
            </Link>
          </li>

         
        </div>



      </nav>
    </>
  );
}
export default Navbar;
