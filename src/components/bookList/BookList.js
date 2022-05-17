import React,{useState,useEffect} from "react";
import BookCard from "../bookCard/BookCard";

const BookList = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{

        let url = "https://bookreview-backend.herokuapp.com/books"
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setBooks(data);
        
        });
    },[]);

    return(
        <div className="bookList">
            {books.map((book, index)=>{
                return(
                    <BookCard book={book} index={index}/>
                )
            })}
        </div>
    )

}

export default BookList;