import { useContext } from "react";
import BookListCont from "./booklist-cont";
import { bmsContext } from "./context/context-provider";
import SearchBar from "./search-bar";

const SearchedBooks=()=>{
    let store:any=useContext(bmsContext);
    let searchedBooks=store.state.searchedBooks;
    return(
        <div>
            <SearchBar/>
            <div className='d-flex flex-row justify-content-center'>
                {searchedBooks && <BookListCont books={searchedBooks}/>}
            </div>
        </div>
        
    )
}
export default SearchedBooks;