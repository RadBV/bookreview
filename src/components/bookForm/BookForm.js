import React, { useState } from 'react';
import "./BookForm.scss";

const BookForm= () => {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [pages,setPages] = useState('');
    const [chapters,setChapters] = useState('');
    const [genre,setGenre] = useState('');
    const [cover_img,setCover_img] = useState('');
    const createNewBook = () => {
        //prepare our request body
        let reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,author,pages,chapters,genre,cover_img})
        }
        //post the request with fetch
        fetch('https://bookreview-backend.herokuapp.com/books',reqOptions)
        .then(response => response.json())
        .then(data => {
            //clear out form
            setTitle('')
            setAuthor('')
            setPages('')
            setChapters('')
            setGenre('')
            setCover_img('')
            //let user know book has been created
                //????
            //update student list
        }).catch(err => {
            //let user know of err
        })
    }

    return(
        <div className='bookForm'>
            <h2 className='bookForm__title'>
                book form
            </h2>
            <div className='bookForm__form'>
                <div className='bookForm__inputContainer'>
                    <label>Title:</label>
                    <input 
                    value={title} 
                    className='bookForm__input' 
                    placeholder='Moby Dick'
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className='bookForm__inputContainer'>
                    <label>Author:</label>
                    <input 
                    value={author} 
                    className='bookForm__input' 
                    placeholder='Herman Melville'
                    onChange={(e)=>setAuthor(e.target.value)}
                    />
                </div>
                <div className='bookForm__inputContainer'>
                    <label>Pages:</label>
                    <input 
                    value={pages} 
                    className='bookForm__input' 
                    placeholder='427'
                    onChange={(e)=>setPages(e.target.value)}
                    />
                </div>
                <div className='bookForm__inputContainer'>
                    <label>Chapters:</label>
                    <input 
                    value={chapters} 
                    className='bookForm__input' 
                    placeholder='135'
                    onChange={(e)=>setChapters(e.target.value)}
                    />
                </div>
                <div className='bookForm__inputContainer'>
                    <label>Genre:</label>
                    <input 
                    value={genre} 
                    className='bookForm__input' 
                    placeholder='Adventure, Fiction'
                    onChange={(e)=>setGenre(e.target.value)}
                    />
                </div>
                <div className='bookForm__inputContainer'>
                    <label>Cover URL:</label>
                    <input 
                    value={cover_img} 
                    className='bookForm__input' 
                    placeholder='https://images-na.ssl-images-amazon.com/images/I/91DhazpQXML.jpg'
                    onChange={(e)=>setCover_img(e.target.value)}
                    />
                </div>
                <div className='bookForm__submitButton' onClick={()=>createNewBook()}>
                    Submit
                </div>
            </div>
        </div>
    )
}
export default BookForm
