import React, { useEffect, useState,useContext } from 'react';
import { useHistory, useParams } from "react-router";
import { bmsContext } from './context/context-provider';
import StarRating from "./stars";
const Description=()=>{
    const {id}:any=useParams();
    const history=useHistory();
    //let [book,setBooks]:any=useState(null);
    let store:any=useContext(bmsContext);
    let books:any=store.state.books;
    let book=store.state.selBook;
    useEffect(()=>{
        for(let i of books){
            if(i.id===id){
               var res=i;
            }
        }
       store.dispatch({type:'sel_book',payload:res})
    })
    const handleDelete=()=>{
        store.dispatch({type:'del_book',payload:book})
        history.push('/')
        
    } 
    
    return(
        <div className='d-flex flex-row justify-content-center'>
       {book &&  <div className='desc-card'>
            <div className='d-flex flex-row'>
                <div>
                    <img className='desc-img' src={book.cover}/>
                </div>
                <div className='details-card'>
                    <h1>{book.title}</h1>
                    <p>Author:{book.author}</p>
                    <p>Price:{book.price}
                    <span className="ml-3">Rating:<StarRating rating={Math.round(book.rating)}/></span></p>
                </div>
            </div>
            <div className='p-3 m-2'>
                <p>{book.description}</p>
            </div>
          {store.state.isAuth &&  <div className='d-flex flex-row justify-content-center'>
                 <button onClick={handleDelete} className='btn btn-secondary'>Delete</button> 
            </div>}
        </div>}
        </div>
    )
}
export default Description;