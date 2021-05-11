import React, { useContext} from 'react';
import BookListCont from './booklist-cont';
import { bmsContext } from './context/context-provider';
import SearchBar from './search-bar';

const Home=()=>{
    let store:any=useContext(bmsContext);
    let books=store.state.books;
    return(
        <div>
             <SearchBar/>
            <div className='d-flex flex-row justify-content-center'>
               {books && <BookListCont books={books}/>}
            </div>
        </div>
    )
}

export default Home;