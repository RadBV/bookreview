import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./BookDetail.scss"

const BookDetail = () => {
    let params = useParams();

    let bookId = params.id;

    const [bookData, setBookData] = useState({});

    useEffect(()=>{
        let url = "https://bookreview-backend.herokuapp.com/books/" + bookId
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setBookData(data.book);
        });
    }, []);

    return(
        <div className="bookDetail" data-testid="bookDetail">
            <div className="bookDetail__topBar">

                <div className="bookDetail__goBack">
                    <Link to={"/"}>
                    Go back
                    </Link>
                </div>

            </div>


            <div className="twoColumns">

                <img src={bookData.cover_img} className="bookDetail__image"/>

                <div className="bookDetail__infoSection">
                    <h2 className="bookDetail__title">
                        {bookData.title}
                    </h2>
                    
                    <div className="bookDetail__author">
                        {bookData.author} (Author)
                    </div>

                    <div className="bookDetail__pages">Pages: {bookData.pages}</div>
                    <div className="bookDetail__chapters">Chapters: {bookData.chapters}</div>
                    <div className="bookDetail__genre">Genres: {bookData.genre}</div>
                    <div className="bookDetail__description">
                        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                </div>

                
            </div>

            <hr/>
            <div className="bookDetail__noteSection">

            </div>
        </div>
    )
}

export default BookDetail;