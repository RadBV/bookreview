import React from 'react';
import BookList from '../../components/bookList/BookList';

function BookManagement(){
    return(
        <div className="bookManagement" data-testid="bookManagement">
            <BookList/>
        </div>
    )
}

export default BookManagement;