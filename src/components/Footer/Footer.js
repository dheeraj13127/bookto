import React from 'react'
import { FaBook } from "react-icons/fa";
import '../styles/Footer.css'
function Footer() {
    return (
        <div>
            <footer class="page-footer dashNav">
<div class="container">
  <div class="row">
    <div class="col l6 s12">
    <a href='' className='brand-logo brandLogo white-text'>
            <FaBook className='white-text brandImage' />
            Bookto
          </a>
      <p class="grey-text text-lighten-4 booktoMoto">Buy and Sell Book of your choice.</p>
    </div>
   
  </div>
 
 
      <div className="row">
          <div className="col l12 m6 s12">
              <p>  © 2022 Bookto</p>
          </div>
          <div className="col l12 m6 s12">
      <a class="grey-text text-lighten-4" href="#!">More Links</a>
      </div>
      </div>
      

 

</div>

</footer>
        </div>
    )
}

export default Footer
