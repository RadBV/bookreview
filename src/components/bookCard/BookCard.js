import React from "react";
import { Link } from "react-router-dom";



const BookCard = ({book}) => {
    return (
        
<div className="bookCard" data-testid="bookCard" >
    <Link to={`book/${book?.id}`}>
        <div className="grid" >

            {/* <img className="studentCard__image" src={student?.pic} /> */}

            <div className="bookCard__info">
                
                <div className="bookCard__title">
                    {book?.title}
                </div>

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