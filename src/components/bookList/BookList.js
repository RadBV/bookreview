import React from "react";
import BookCard from "../bookCard/BookCard";
import "./BookList.scss"

const BookList = ({books}) => {

    return(
        <div className="bookList" data-testid="bookList">
            {books.map((book, index)=>{
                return(
                    <BookCard book={book} index={index}/>
                )
            })}
        </div>
    )

}

export default BookList;