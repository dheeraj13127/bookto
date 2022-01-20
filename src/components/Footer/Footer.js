import React from "react";
import { FaBook, FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="page-footer dashNav footerBox">
      <div className="container-fluid footerContainer">
        <div className="row">
          <div className="col l4 m4 s12 footerLogoBox">
            <a href="" className="brand-logo brandLogo white-text">
              <FaBook className="white-text brandImage" />
              Bookto
            </a>
            <p className="grey-text text-lighten-4 booktoMoto">
              Buy and Sell Book of your choice.
            </p>
          </div>
          <div className="col l4 m4 s6 center-align">
            <a className="grey-text text-lighten-4 footerIconsHeader" href="">
              Connect to us
            </a>
            <br />
            <a className=" white-text">
              <FaInstagram className="footerIcons" />
            </a>
            <a className=" white-text">
              <FaTwitter className="footerIcons" />
            </a>
            <a className=" white-text">
              <FaFacebook className="footerIcons" />
            </a>
            <a className=" white-text">
              <FaDiscord className="footerIcons" />
            </a>
          </div>
          <div className="col l4 m4 s6 center-align">
            <a className="grey-text text-lighten-4 footerIconsHeader" href="">
              Pages
            </a>
            <br />
          
            <a href="/dashboard" className="footerPagesText white-text">
              Home
            </a><br />
            <a href="/createBook" className="footerPagesText white-text">
              Create Book
            </a><br />
            <a href="/myBooks" className="footerPagesText white-text">
              My Books
            </a><br />
          </div>
        </div>

        <div className="row">
          <div className="col l12 center-align m12 s12">
            <p className="footerCopyright"> © 2022 Bookto</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
