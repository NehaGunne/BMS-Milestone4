import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { bmsContext } from './context/context-provider';

let book:any={
    title:'',
    author:'',
    rating:'',
    price:'',
    cover:'',
    description:''
}

const AddBook=()=>{
    let store:any=useContext(bmsContext);
    let [errMsg,setMsg]=useState('');
    const history=useHistory();
    function handleChange(e:any){
        let key=e.target.name;
        let val=e.target.value;
        book[key]=val;

    }
    function addBook(){
        store.dispatch({type:'add_book',payload:book})
        history.push('/')
       }

    return(
        <div className='text-center'>
            <div className='d-flex flex-row justify-content-center m-3'>
                <div>
                    <input name='title' onChange={handleChange}  placeholder='enter book name' className='form-control input'/>
                    <input name='author' onChange={handleChange}  placeholder='enter book author' className='form-control input'/>
                    <input name='rating' onChange={handleChange}  placeholder='enter book rating' className='form-control input'/>
                    <input name='price' onChange={handleChange}  placeholder='enter book price' className='form-control input'/>
                    <input name='cover' onChange={handleChange}  placeholder='enter book cover url' className='form-control input'/>
                    <textarea name='description' onChange={handleChange}  placeholder='enter book description' className='form-control input'/>
                    <button className='btn btn-dark m-3 p-2' onClick={addBook}>Submit</button>
                    <p className='err-msg'>{errMsg}</p>
                </div>

            </div>

        </div>
    )
}

export default AddBook