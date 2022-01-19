import React, { useEffect, useRef,useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import "../styles/Navbar.css";
import msd from "../images/msd.jpg";
const Navbar=(props)=>{
  
 

  const navRef = useRef(null);
  useEffect(() => {
    const M = window.M;
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <div className=''>
      <nav className=' dashNav'>
        <div className='nav-wrapper'>
          <a href='' className='brand-logo brandLogo'>
            <FaBook className='white-text brandImage' />
            Bookto
          </a>
          <a data-target='mobile-demo' className='sidenav-trigger'>
            <GiHamburgerMenu className='white-text' />
          </a>
          <ul className='right hide-on-med-and-down'>
          <li>
              <div className='chip dashChip'>
                <img src={msd} />
               {props.user.username}
              </div>
            </li>
            <li className='navLi'>
              <a href='/dashboard'>Home</a>
            </li>
            <li className='navLi'>
              <a href='/createBook'>Create Book</a>
            </li>
            <li className='navLi'>
              <a href=''>My Books</a>
            </li>
          
            <li>
              <button className="btn-small  signOutBtn" onClick={()=>props.signout()}>signout</button>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo' ref={navRef}>
        <li>
          <div className='chip sideNavProfile'>
            <img src={msd} />
            {props.user.username}
          </div>
        </li>
        <li className='navLi'>
          <a href='/dashboard'>Home</a>
        </li>
        <li className='navLi'>
          <a href='/createBook'>Create Book</a>
        </li>
        <li className='navLi'>
          <a href=''>My Books</a>
        </li>
        <li className="">
              <button className="btn-small signOutBtnSmall " style={{marginLeft:"30px"}} onClick={()=>props.signout()}>signout</button>
            </li>
      </ul>
    </div>
  );
}

export default Navbar;
