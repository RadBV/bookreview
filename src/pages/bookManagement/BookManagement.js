import React, {useState,useEffect} from 'react';
import BookList from '../../components/bookList/BookList';
import Navbar from '../../components/navBar/Navbar';
import "./BookManagement.scss"

function BookManagement(){
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        refreshBooks()
    },[]);

    const refreshBooks = () => {
        let url = "https://bookreview-backend.herokuapp.com/books"
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setBooks(data);
        
        });
    }

    return(
        <div className="bookManagement" data-testid="bookManagement">
            <header className='bookManagement__navBar'><Navbar refreshBooks={refreshBooks}/></header>
            <div className='bookManagement__bookList'><BookList books={books}/></div>
        </div>
    )
}

export default BookManagement;