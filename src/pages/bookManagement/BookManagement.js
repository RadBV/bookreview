import React from 'react';
import BookList from '../../components/bookList/BookList';
import Navbar from '../../components/navBar/Navbar';

function BookManagement(){
    return(
        <div className="bookManagement" data-testid="bookManagement">
            <Navbar/>
            <BookList/>
        </div>
    )
}

export default BookManagement;