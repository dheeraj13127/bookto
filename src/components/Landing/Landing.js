import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import backgroundImage from "./assests/1.jpg";
import "../styles/Landing.css";
import Footer from "../Footer/Footer";
import profile from "./assests/2.jpg";
import { FaBook } from "react-icons/fa";
import { SiSellfy } from "react-icons/si";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className='container-fluid'>
      <div className='row navbarMain'>
        <nav>
          <div class='nav-wrapper container-fluid'>
            <a href='#' class='brand-logo'>
              Logo
            </a>
            <ul id='nav-mobile' class='right hide-on-med-and-down'>
              <li>
                <button
                  className='buttonDash'
                  onClick={() => navigate("/dashboard")}
                >
                  Get Start
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className='row center-align valign-wrapper heroSection'>
          <div className='col s12 m12'>
            <h1>Welcome to Bookto</h1>

            <h5>Find all kinds of books that you are interested in </h5>
            <button
              className='buttonDash'
              onClick={() => navigate("/dashboard")}
            >
              Learn more
            </button>
          </div>
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
              <FaBook size={45} />
            </div>
            <div className='row'>lorem</div>
            <div className='row'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              blanditiis.
            </div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <FaBook size={45} />
            </div>
            <div className='row'>Lorem, ipsum.</div>
            <div className='row'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
              sit.
            </div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <FaBook
                size={60}
                style={{
                  backgroundColor: "black",
                  color: "white",

                  size: "30px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className='row'>Lorem, ipsum.</div>
            <div className='row'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corrupti, neque.
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
        <div className='row center-align'>
          We welcome everyone who wish to be immersed in the world of their own
          and we make our best effort so you can spread your wings.
        </div>
        <div className='row center-align servicesMain'>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <FaBook size={45} />
            </div>
            <div className='row'>Browse</div>
            <div className='row'>Check out our curated collection</div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <FaBook size={45} />
            </div>
            <div className='row'>Buy</div>
            <div className='row'>Own your book by the tap of a button</div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row icon'>
              <SiSellfy size={45} />
            </div>
            <div className='row'>Sell</div>
            <div className='row'>
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
              <img src={profile} alt='' width='200' />
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
              <div className='desc'>Front-End Developer</div>
            </div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row'>
              <img src={profile} alt='' width='200' />
            </div>
            <div className='row name'>
              Nameesha <br />
              <div className='desc'>Backend Developer</div>
            </div>
          </div>
          <div className='col s12 m3 l3'>
            <div className='row'>
              <img src={profile} alt='' width='200' />
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
