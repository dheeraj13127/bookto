import React, { useEffect, useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API } from "aws-amplify";
import HashLoader from "react-spinners/HashLoader";
import "../styles/PurchaseBook.css";
import Footer from "../Footer/Footer";
import {FaEthereum} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {useWallet} from 'use-wallet'
import toast, { Toaster } from "react-hot-toast";
import Web3 from "web3";
let userData
function PurchaseBook() {
  const wallet=useWallet()
  const web3 = new Web3(Web3.givenProvider);
  const bookContract=useSelector(state=>state.booktoContract)
 
  const dispatch=useDispatch()
  const [bookData, setBookData] = useState([]);
  const [color, setColor] = useState("#2A344A");
  const navigate = useNavigate();
  const [newItem,setNewItem]=useState([])

  useEffect(() => {
    API.get("booksapi", "/books/bookId").then((res) => {
      setBookData([...bookData, ...res]);
    }); 
  }, []);
  console.log(bookData)
  const { id } = useParams();
  let book = bookData.filter((d) => d.bookId === id);
 
  const setUser=(user)=>{
      userData=user.attributes.sub
  }

  const purchaseBook=async(addr,price,bId,bName,aName,desc,bContent,ownId,thumbnail,userId,pBooks)=>{
    await bookContract.methods.buyBook(addr).send({
      from:wallet.account,
      value:web3.utils.toWei(price,'ether')
    })
    .then(res=>{
     
      toast.success('Successfully Purchased')
      API.put("booksapi","/books",{
        body:{
          bookId:bId,
          authorName:aName,
          bookDesc:desc,
          content:bContent,
          ownerId:ownId,
          thumbnail:thumbnail,
          price:price,
          userId:userId,
          bookName:bName,
          purchasedBooks:[...pBooks,userData],
          walletAddress:addr

        }
    })
    .then(resp=>{
      console.log(resp)
    })
    .catch(errs=>console.log(errs))

    })
    .catch(err=>toast.error('Please connect your wallet'))
  }
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <Navbar user={user} signout={signOut} />
            {
              setUser(user)
            }
            {book ? (
              <div className="container-fluid purchaseBookContainer">
                {book.map((data, key) => (
                  <div key={key}>
                    <div className="row purchaseBookRow z-depth-3">
                      <div className="col l4 s12 center-align">
                        <div className="purchaseBookImgBox">
                          <img
                            src={data.thumbnail}
                            alt=""
                            className=" purchaseBookThumbnail"
                          />
                        </div>
                      </div>
                      <div className="col l8 s12">
                        <p className="white-text purchaseBookTitles">
                          Book Name:
                          <br />{" "}
                          <span className="purchaseBookTitlesData">
                            {data.bookName}
                          </span>{" "}
                        </p>
                        <p className="white-text purchaseBookTitles">
                          Book Name:
                          <br />{" "}
                          <span className="purchaseBookTitlesData">
                            {data.bookDesc}
                          </span>{" "}
                        </p>
                        <p className="white-text purchaseBookTitles">
                          Book Price:
                          <br />{" "}
                          <span className="purchaseBookTitlesData ethPrice">
                          <FaEthereum/> {data.price}
                          </span>{" "}
                        </p>
                        <p className="white-text purchaseBookTitles">
                          Book Author:
                          <br />{" "}
                          <span className="purchaseBookTitlesData">
                           {data.authorName}
                          </span>{" "}
                        </p>
                      </div>
                      <div className="col l12 s12">
                          <div className="center-align" onClick={()=>purchaseBook(data.walletAddress,data.price,data.bookId,data.bookName,data.authorName,data.bookDesc,data.content,data.ownerId,data.thumbnail,data.userId,data.purchasedBooks)}>
                              <button className="btn purchaseBookPurchaseBtn">Purchase</button>
                          </div>
                      </div>
                    </div>
                  </div>
                ))}
                 
              </div>
            ) : (
              <div className="center-align" style={{ marginTop: "30px" }}>
                <HashLoader color={color} size={150} />
              </div>
            )}
           
          </div>
         
        )}
      </Authenticator>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer/>
    </div>
  );
}

export default PurchaseBook;
