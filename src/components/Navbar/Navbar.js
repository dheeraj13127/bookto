import React, { useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import "../styles/Navbar.css";
import msd from "../images/msd.jpg";
function Navbar() {
  const navRef = useRef(null);
  useEffect(() => {
    const M = window.M;
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);
  return (
    <div className="navbar-fixed">
      <nav className=" dashNav">
        <div className="nav-wrapper">
          <a href="" className="brand-logo brandLogo">
            <FaBook className="white-text brandImage" />
            Bookto
          </a>
          <a data-target="mobile-demo" className="sidenav-trigger">
            <GiHamburgerMenu className="white-text" />
          </a>
          <ul className="right hide-on-med-and-down">
            <li className="navLi">
              <a href="">Home</a>
            </li>
            <li className="navLi">
              <a href="">Create Book</a>
            </li>
            <li className="navLi">
              <a href="">My Books</a>
            </li>
            <li>
              <div class="chip">
                <img src={msd} />
                Dhoni
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo" ref={navRef}>
        <li>
          <div class="chip sideNavProfile">
            <img src={msd} />
            Dhoni
          </div>
        </li>
        <li className="navLi">
          <a href="">Home</a>
        </li>
        <li className="navLi">
          <a href="">Create Book</a>
        </li>
        <li className="navLi">
          <a href="">My Books</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
