import React, { useState,useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "../styles/Dashboard.css";
import msd from "../images/msd.jpg";
import "../styles/SignUp.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import CarouselContain from "./Carousel";
import Footer from "../Footer/Footer";
import { API } from "aws-amplify";
function Dashboard() {
  const [bookData,setBookData]=useState([])
  useEffect(() => {
    API.get("booksapi", "/books/bookId").then((res) =>{
      
      setBookData([...bookData,...res])
    });
  }, []);


  const [len, setLen] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    const setUser=(userData,signOut)=>{
      console.log(userData)
      localStorage.setItem('userdataName',userData.username)
      localStorage.setItem('userSignOut',signOut)
    }
   
  return (
    <div className='signInPage'>
      <Authenticator
        socialProviders={["amazon", "apple", "facebook", "google"]}
      >
        {({ signOut, user }) => (
          <div className=''>
            <Navbar user={user} signout={signOut} />
            <div className='container-fluid dashboardContainer'>
              <div className='row'>
                <div className='col l12 s12'>
                  <CarouselContain />
                </div>
              </div>
              <div className='row dashboardBooksRow'>
                {bookData&&bookData.map((l) => (
                  <div className='col l3 m6 s12'>
                    <div className='card dashboardCard z-depth-3'>
                      <div className='card-image waves-effect waves-block waves-light'>
                        <img className='activator dashboardCardImage' src={l.thumbnail} alt="msd"/>
                      </div>
                      <div className='card-content cardContent center-align'>
                        <p className='card-title activator black-text text-darken-4 bookTitle'>
                          {l.bookName}
                        </p>
                        <p className='bookPrice '>₹ {l.price}</p>
                        <button className='btn waves-effect cartBtn'>
                          Purchase book
                          <i className='material-icons right'>
                          shopping_bag
                          </i>{" "}
                        </button>
                      </div>
                      <div className='card-reveal cardRevealBox'>
                        <h5 className='card-title black-text revealhHeaderTitle'>
                          About the book
                          <i className='material-icons right'>close</i>
                        </h5>
                        <h6 className='revealDescription revealTitle'>
                        <span className="bookInfo">Book name</span>:<br/> {l.bookName}
                        </h6>
                        <h6 className='revealDescription revealTitle'>
                        <span className="bookInfo">Book description</span>:<br/> {l.bookDesc}
                        </h6>
                        <h6 className='revealDescription revealTitle'>
                        <span className="bookInfo">Book author</span>:<br/> {l.authorName}
                        </h6>
                        <h6 className='revealDescription revealTitle'>
                        <span className="bookInfo">Book price</span>:<br/> ₹ {l.price}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {setUser(user,signOut)}
           
            <Footer />
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default Dashboard;
