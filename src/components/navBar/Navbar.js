import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookForm from '../bookForm/BookForm';
import "./NavBar.scss"

const Navbar= () => {
    return(
        <nav className='navBar'>
            
            <Link to= "/addBook" className='navBar__addBook'>Add Book</Link>
           
            
        </nav>
    )
}
export default Navbar