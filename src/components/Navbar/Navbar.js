import React, { useEffect, useRef,useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import "../styles/Navbar.css";
import msd from "../images/msd.jpg";
const Navbar=(props)=>{
  const [userSignOut,setUserSignOut]=useState(null)
  useEffect(()=>{
   
    const userSignOuts=localStorage.getItem("userSignOut")
    setUserSignOut(userSignOuts)
  },[])
  const userName=localStorage.getItem("userdataName")
console.log(userSignOut)
  const navRef = useRef(null);
  useEffect(() => {
    const M = window.M;
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);
console.log(userName)
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
              <div class='chip dashChip'>
                <img src={msd} />
               {userName&&userName}
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
              <button className="btn-small white black-text singOutBtn" onClick={()=>userSignOut()}>signout</button>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo' ref={navRef}>
        <li>
          <div className='chip sideNavProfile'>
            <img src={msd} />
            {userName&&userName}
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
        <li className="signOutBtnSmall">
              <button className="btn-small black white-text singOutBtn " style={{marginLeft:"30px"}} onClick={()=>userSignOut()}>signout</button>
            </li>
      </ul>
    </div>
  );
}

export default Navbar;
