import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";
import Footer from "../Footer/Footer";
import profile from "./assests/2.jpg";
import { FaBook,FaEthereum } from "react-icons/fa";
import { SiSellfy } from "react-icons/si";
import { HiShoppingCart } from "react-icons/hi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrBitcoin, GrSecure } from "react-icons/gr";
import { MdOutlinePayment, MdSell } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import dheeraj from "./assests/dheerajnew.png";
import nameesh from "./assests/Nameesh.JPG";
import sujay from "./assests/sujay.jpg";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className='container-fluid landingFullPage'>
      <div className='row center-align valign-wrapper heroSection'>
        <div className='col s12 m12'>
          <h1>Welcome to Bookto</h1>

          <h5>Look for your next adventure here </h5>
          <button className='buttonDash' onClick={() => navigate("/dashboard")}>
          Get Started
          </button>
        </div>
      </div>

      <div className='row featureFull'>
        <div className='row featureHeaderWrapper'>
          <div className='row'>
            <h2 className='center-align featureHeader'>Features</h2>
          </div>

          <div className='blueLine'></div>
        </div>

        <div className='row center-align featuresMain'>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <FaEthereum size={45} />
            </div>
            <div className='row title'>Crypto Transactions</div>
            <div className='row cont'>
              We are moving with the world and accept{" "}
              <strong>
                <u>cryptocurrency</u>
              </strong>{" "}
              as our main currency to buy and sell books.
            </div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <MdOutlinePayment size={45} />
            </div>
            <div className='row title'>Instant Payments</div>
            <div className='row cont'>
              The funds from selling your book will be sent instantly to your
              linked account.
            </div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <GrSecure size={45} />
            </div>
            <div className='row title'>Secure</div>
            <div className='row cont'>
              We use Amazon's Cognito Service to authenticate users.
            </div>
          </div>
        </div>
      </div>
      <div className='row servicesFull'>
        <div className='row servicesHeaderWrapper'>
          <div className='row center-align'>
            <h2 className='servicesHeader'>Services</h2>
          </div>
          <div className='blueLine'></div>
        </div>
        <div className='row center-align serviceDesc'>
          We welcome everyone who wish to be immersed in the world of their own
          and we make our best effort so you can spread your wings.
        </div>
        <div className='row center-align servicesMain'>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <IoLibrary size={45} />
            </div>
            <div className='row title'>Browse</div>
            <div className='row cont'>Check out our curated collection</div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <HiShoppingCart size={45} />
            </div>
            <div className='row title'>Buy</div>
            <div className='row cont'>Own your book by the tap of a button</div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <MdSell size={45} />
            </div>
            <div className='row title'>Sell</div>
            <div className='row cont'>
              Find a bigger audience to express yourself
            </div>
          </div>
        </div>
      </div>
      <div className='row teamFull center-align'>
        <div className='row teamHeaderWrapper'>
          <h2 className='row teamHeading'>Meet The Team</h2>
          <div className='blueLine team'></div>
        </div>
        <div className='row teamMain'>
          <div className='col s12 m3 l3'>
            <div className='row'>
              <img src={dheeraj} alt='' width='200' />
            </div>
            <div className='row name'>
              Dheeraj <br />
              <div className='desc'>FullStack Developer</div>
            </div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row'>
              <img src={profile} alt='' width='200' />
            </div>
            <div className='row name'>
              Sumedh <br />
              <div className='desc'>Frontend Developer</div>
            </div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row'>
              <img src={nameesh} alt='' width='200' />
            </div>
            <div className='row name'>
              Nameesha <br />
              <div className='desc'>Backend Developer</div>
            </div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row'>
              <img src={sujay} alt='' width='200' />
            </div>
            <div className='row name'>
              Sujay <br />
              <div className='desc'>Frontend Developer</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
