import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useWallet } from "use-wallet";
import meta from "../images/meta1.png";
const Navbar = (props) => {
  const wallet = useWallet();
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const M = window.M;
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
    wallet.connect()
  }, []);
 const authWallet=()=>{
   !wallet.account&&wallet.connect()
 }
  return (
    <div className="">
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
            <li>
              <div className="chip dashChip ">
                {/* <img src={msd} /> */}
                {props.user.username}
              </div>
            </li>
            <li>
              <div className="chip dashChip metaChip"  onClick={()=>authWallet()}>
                <img src={meta} />
                {wallet.account ? "Connected" : "Disconnected"}
              </div>
            </li>
            <li className="navLi">
              <a href="/dashboard">Home</a>
            </li>
            <li className="navLi">
              <a href="/createBook">Create Book</a>
            </li>
            <li className="navLi">
              <a href="/myBooks">My Books</a>
            </li>

            <li>
              <button
                className="btn-small  signOutBtn"
                onClick={() => {
                  props.signout();
                  navigate("/");
                }}
              >
                signout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo" ref={navRef}>
        <li>
          <div className="chip sideNavProfile">{props.user.username}</div>
        </li>
        <li className="">
          <div className="chip dashChip sideNavProfile metaChip" onClick={()=>authWallet()}>
            <img src={meta} />
            {wallet.account ? "Connected" : "Disconnected"}
          </div>
        </li>
        <li className="navLi">
          <a href="/dashboard">Home</a>
        </li>
        <li className="navLi">
          <a href="/createBook">Create Book</a>
        </li>
        <li className="navLi">
          <a href="/myBooks">My Books</a>
        </li>
        <li className="">
          <button
            className="btn-small signOutBtnSmall "
            style={{ marginLeft: "30px" }}
            onClick={() => {
              props.signout();
              navigate("/");
            }}
          >
            signout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
