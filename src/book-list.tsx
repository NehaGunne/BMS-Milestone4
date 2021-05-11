import { useContext } from "react";
import { Link } from "react-router-dom";
import { bmsContext } from "./context/context-provider";
import StarRating from "./stars";

const BookList=(props:any)=>{
    let book:any=props.book;
    return(
        <div className='col-4 list-card text-center'>
            <Link to={`/book/${book.id}`}>
            <div>
                <img src={book.cover} className='list-img'/>
            </div>
            <div className='text-center'>
                <ul className='list-details'>
                    <li>Title: {book.title}</li>
                    <li>Author: {book.author}</li>
                    <li>Price: {book.price}</li>
                    <li>Rating: 
                    <StarRating rating={Math.round(book.rating)}/></li>
                </ul>
            </div>
            </Link>
        </div>
    )

}
export default BookList;