import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.scss"



const BookCard = ({book}) => {
    return (
        
<div className="bookCard" data-testid="bookCard" >
    <Link to={`book/${book?.id}`}>
        <div className="twoColumns" >

            <img className="bookCard__image" src={book?.cover_img} />

            <div className="bookCard__info">
                
                <h3 className="bookCard__title">
                    {book?.title}
                </h3>

                <div className="bookCard__author">
                    by {book?.author}
                </div>

            </div>
        </div>
    </Link>
</div>
    
    )
};

export default BookCard;