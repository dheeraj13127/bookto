import React, { useState,useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "../styles/Dashboard.css";
import {FaEthereum} from 'react-icons/fa'
import "../styles/SignUp.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import CarouselContainer from "./Carousel";
import Footer from "../Footer/Footer";
import { API } from "aws-amplify";
import {useWallet} from 'use-wallet'
import HashLoader from "react-spinners/HashLoader";
import {useNavigate} from 'react-router-dom'
function Dashboard() {
  const wallet=useWallet()
  useEffect(()=>{
    wallet.connect()

  },[])
  const [bookData,setBookData]=useState([])
  const [color, setColor] = useState("#2A344A");
  const navigate=useNavigate()
  useEffect(() => {
    API.get("booksapi", "/books/bookId").then((res) =>{
      
      setBookData([...bookData,...res])
      
    });
  }, []);




  const purchaseBook=(id)=>{
navigate(`/purchaseBook/${id}`)
  }
   
  return (
 
    <div className='signInPage'>
      <Authenticator
        socialProviders={["amazon", "apple", "facebook", "google"]}
      >
        {({ signOut, user }) => (
          <div className=''>
            <Navbar user={user} signout={signOut} />
            {
                  bookData!==[]?(
                  <div>
            <div className='container-fluid dashboardContainer'>
              <div className='row'>
                <div className='col l12 s12'>
                  <CarouselContainer />
                </div>
              </div>
             
                    <div className='row dashboardBooksRow'>
             
                    {bookData&&bookData.map((l,key) => (
                      <div className='col l3 m6 s12' key={key}>
                        <div className='card dashboardCard z-depth-3'>
                          <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator dashboardCardImage' src={l.thumbnail} alt="msd"/>
                          </div>
                          <div className='card-content cardContent center-align'>
                            <p className='card-title activator black-text text-darken-4 bookTitle'>
                              {l.bookName}
                            </p>
                            <p className='bookPrice '><FaEthereum/> {l.price}</p>
                            <button className='btn waves-effect cartBtn' onClick={()=>purchaseBook(l.bookId)}>
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
               <Footer />
               </div>
                  ):(
                    <div>
                      <div className="center-align" style={{ marginTop: "100px" }}>
                <HashLoader color={color} size={125} />
              </div>
                    </div>
                  )
                }
             
           
      
           
           
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default Dashboard;
