import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "../styles/CreateBook.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import S3FileUpload from "react-s3";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { createNewBook } from "../redux/actions";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
function CreateBook() {

  let linkThumbnail;
  let linkContent;
  const navigate=useNavigate()
  const config = {
    bucketName: "booktobucket175249-dev",
    // dirName: 'school-documents',
    region: "ap-south-1",
    accessKeyId: "AKIAXP6KG2SRNPIJD4BH",
    secretAccessKey: "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",
  };

  global.Buffer = global.Buffer || require("buffer").Buffer;
  const dispatch = useDispatch();
  const [bookDetails, setBookDetails] = useState({
    bookName: "",
    bookDesc: "",
    authorName: "",
    price: "",
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [content, setContent] = useState(null);

  const [userId, setUserId] = useState(null);
  const getUser = (user) => {
    setUserId(user.attributes.sub);
  };
  console.log(userId);
  const bookId = uuidv4();

  const onBookDetailsChange = (e) => {
    e.persist();
    setBookDetails((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (
      bookDetails.bookName === "" ||
      bookDetails.bookDesc === "" ||
      bookDetails.authorName === "" ||
      bookDetails.price === "" ||
      thumbnail === "" ||
      content === ""
    ) {
      toast("Please fill in the fields!", {
        icon: "😊",
      });
    }
    await S3FileUpload.uploadFile(thumbnail, config)
      .then((data) => {
        linkThumbnail = data.location;
      })
      .catch((err) => console.error(err));
    await S3FileUpload.uploadFile(content, config)
      .then((data) => {
        linkContent = data.location;
      })
      .catch((err) => console.error(err));

    const payload = {
      ownerId: userId,
      bookId: bookId,
      bookName: bookDetails.bookName,
      bookDesc: bookDetails.bookDesc,
      authorName: bookDetails.authorName,
      price: bookDetails.price,
      thumbnail: linkThumbnail,
      content: linkContent,
    };
    dispatch(createNewBook(payload, API,navigate));
  };
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <Navbar user={user} signout={signOut} />
            <div className="container createBookContainer">
              {getUser(user)}
              <div className="row">
                <div className="col l6 offset-l3 s12 ">
                  <div className="formContainer z-depth-2">
                    <h3 className="center-align createbookHeader">
                      Create a Book
                    </h3>

                    <form onSubmit={onFormSubmit} autoComplete="off">
                      <div className="input-field">
                        <input
                          type="text"
                          name="bookName"
                          value={bookDetails.bookName}
                          onChange={onBookDetailsChange}
                          placeholder="Name of the book"
                          className="validate"
                        />
                      </div>
                      <div className="input-field">
                        <textarea
                          type="text"
                          name="bookDesc"
                          value={bookDetails.bookDesc}
                          onChange={onBookDetailsChange}
                          placeholder="Description about the book"
                          className="materialize-textarea"
                          
                        />
                      </div>
                      <div className="input-field">
                        <input
                          name="authorName"
                          value={bookDetails.authorName}
                          onChange={onBookDetailsChange}
                          type="text"
                          placeholder="Author Name"
                          className="validate"
                        />
                      </div>
                      <div className="input-field">
                        <input
                          type="number"
                          name="price"
                          value={bookDetails.price}
                          onChange={onBookDetailsChange}
                          placeholder="Price of the Book in ₹"
                          className="validate"
                        />
                      </div>
                      <div className="file-field input-field">
                        <div className="btn-small uploadBtn">
                          <span>Upload</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setThumbnail(e.target.files[0])}
                          />
                        </div>
                        <div className="file-path-wrapper">
                          <input
                            className="file-path validate"
                            placeholder="Choose Thumbnail of the book"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="file-field input-field">
                        <div className="btn-small uploadBtn">
                          <span>upload</span>
                          <input
                            type="file"
                            accept="application/pdf"
                            onChange={(e) => setContent(e.target.files[0])}
                          />
                        </div>
                        <div className="file-path-wrapper">
                          <input
                            className="file-path validate"
                            placeholder="Upload Content of the book"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="center-align createBooksubmitBox">
                        <button className="btn-large createBookSubmitBtn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Authenticator>
      <Toaster position="top-center" reverseOrder={false} />

      <Footer />
    </div>
  );
}

export default CreateBook;
