import { useContext } from "react";
import BookList from "./book-list";
import { bmsContext } from "./context/context-provider";

const BookListCont=(props:any)=>{
    let books=props.books
    return(
        <div className='container' >
            <div className='row'>
            {books && books.map((each:any)=><BookList book={each}/>)}
            </div>
        </div>
    )
}
export default BookListCont;