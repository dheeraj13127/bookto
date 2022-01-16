import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../styles/Dashboard.css";
import msd from "../images/msd.jpg";

import Footer from '../Footer/Footer'
function Dashboard() {
  const [len, setLen] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div className="">
      <Navbar />
      <div className="container-fluid dashboardContainer">
        <div className="row">
          <div className="col l12 s12">
          <div class="carousel">
    <a class="carousel-item" href=""><img src={msd}/></a>
    </div>
          </div>
        </div>
        <div className="row dashboardBooksRow">
          {len.map((l) => (
            <div className="col l3 m3 s12">
              <div className="card z-depth-3">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={msd} />
                </div>
                <div className="card-content cardContent center-align">
                  <p className="card-title activator black-text text-darken-4 bookTitle">
                    Book Title
                  </p>
                  <p className="bookPrice ">₹199</p>
                   <button className="btn waves-effect cartBtn">Buy book<i className="material-icons right">add_shopping_cart</i> </button>
                
                </div>
                <div className="card-reveal">
                  <p className="card-title grey-text text-darken-4 revealTitle">
                    Book Title<i className="material-icons right">close</i>
                  </p>
                  <p className="revealDescription">
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>

      <Footer/>
    </div>
  );
}

export default Dashboard;