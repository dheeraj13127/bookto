import React, { useEffect, useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import Navbar from "../Navbar/Navbar";


import { API } from "aws-amplify";
import HashLoader from "react-spinners/HashLoader";
import "../styles/MyBooks.css";
import Footer from "../Footer/Footer";
import { FaEthereum } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";


let userData;
function MyBooks() {


  const [bookData, setBookData] = useState([]);
 
  const [color, setColor] = useState("#2A344A");



  useEffect(() => {
    API.get("booksapi", "/books/bookId").then((res) => {
      setBookData([...bookData, ...res]);
    });
  }, []);
  const setUser = (user) => {
    userData = user.attributes.sub;
  };
console.log(userData)
  console.log(bookData);
 
  let book = bookData.filter((d) =>d.ownerId===userData  );
  let pBook=bookData.map(b=>{
    for(let i=0;i<b.purchasedBooks.length;i++){
      if(b.purchasedBooks[i]===userData){
        return b
      }
    }
  })
  let newPbook=pBook.filter(b=>b!==undefined)
  
console.log(pBook)
console.log(newPbook)
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <Navbar user={user} signout={signOut} />
            {setUser(user)}
            {book ? (
              <div className="container-fluid purchaseBookContainer">
                 <div className="row purchaseBookRow z-depth-3">
                   <h5 className="center-align white-text myBooksHeader">Published Books</h5>
                {book.map((l, key) => (
                  
                   
                     
                    <div className='col l3 offset-l3 m6 s12' key={key}>
                        <div className='card dashboardCard z-depth-3'>
                          <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator dashboardCardImage' src={l.thumbnail} alt="msd"/>
                          </div>
                          <div className='card-content cardContent center-align'>
                            <p className='card-title activator black-text text-darken-4 bookTitle'>
                              {l.bookName}
                            </p>
                            <p className='bookPrice '><FaEthereum/> {l.price}</p>
                            
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
                            <span className="bookInfo">Book price</span>:<br/> <FaEthereum/> {l.price}
                            </h6>
                          </div>
                        </div>
                      </div>
                     
            
                    
                  
                ))}
                </div>
                <div className="row purchaseBookRow z-depth-3">
                   <h5 className="center-align white-text myBooksHeader">Purchased Books</h5>
                {newPbook.map((l, key) => (
                  
                   
                     
                    <div className='col l3 offset-l3 m6 s12' key={key}>
                        <div className='card dashboardCard z-depth-3'>
                          <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator dashboardCardImage' src={l.thumbnail} alt="msd"/>
                          </div>
                          <div className='card-content cardContent center-align'>
                            <p className='card-title activator black-text text-darken-4 bookTitle'>
                              {l.bookName}
                            </p>
                            <p className='bookPrice '><FaEthereum/> {l.price}</p>
                            
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
                            <span className="bookInfo">Book price</span>:<br/> <FaEthereum/> {l.price}
                            </h6>
                            <div className="center-align">
                            <a href={l.content} target="_blank" className="waves-effect btn purchaseBookDownloadBtn">
                              Download{" "}
                              <i className="material-icons right">download</i>
                            </a>
                            </div>
                          </div>
                        </div>
                      </div>
                     
            
                    
                  
                ))}
                
                </div>
              </div>
            ) : (
              <div className="center-align" style={{ marginTop: "80px" }}>
                <h5>No Books Purchased or Published</h5>
                <HashLoader color={color} size={150} />
              </div>
            )}
          </div>
        )}
      </Authenticator>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </div>
  );
}

export default MyBooks;
