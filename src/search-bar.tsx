import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { bmsContext } from "./context/context-provider";

let value='',name='id',min=0,max=200;
const SearchBar=()=>{
    let store:any=useContext(bmsContext);
    let books=store.state.books;
    const history=useHistory();
    let [priceStyle,setPriceStyle]=useState({display:'none'})
    let [styleAll,setAllStyle]=useState({display:'block'})
        function getName(e:any){
            name=e.target.value;
            if(name==='price'){
                setPriceStyle({display:'block'})
                setAllStyle({display:'none'})
            }else{
                setPriceStyle({display:'none'})
                setAllStyle({display:'block'})

            }

        }
        function getValue(e:any){
            value=e.target.value;
        }
        function getMinMax(e:any){
            value=e.target.value.split('-');
            min=parseInt(value[0]);
            max=parseInt(value[1]);
            console.log(min,max)

        }
    async function searchBooks(e:any){
        let res:any=[]
        if(name==='id'){
            for(let i of books){
                if(i.id===value){
                    res.push(i);
                }
            }
        }
        else if(name==='author'){
            for(let i of books){
                if(i.author===value){
                    res.push(i);
                }
            }
        }
        else if(name==='title'){
            for(let i of books){
                if(i.title===value){
                    res.push(i);
                }
            }
        }
        else if(name==='rating'){
            for(let i of books){
                if(i.rating>=value){
                    res.push(i);
                }
            }
        }
        else if(name==='price'){
            for(let i of books){
                if(i.price>=min && i.price<=max){
                    res.push(i);
                }
            }
        } 
        store.dispatch({type:'search',payload:res})
        history.push('/search')
        
    }
    return(
        <div className='d-flex flex-row justify-content-center'>
                <select onChange={getName} className='form-control input'>
                    <option value='id'>Search by id</option>
                    <option value='title'>Search by title</option>
                    <option value='author'>Search by author</option>
                    <option value='rating'>Search by rating</option>
                    <option value='text'>Search by text</option>
                    <option value='price'>Search by price</option>
                </select>
                <input style={styleAll} className='form-control input' placeholder='Search here' onChange={getValue}/>
                <select style={priceStyle} onChange={getMinMax} className='form-control input'>
                    <option value='0-200'>below 200</option>
                    <option>200-300</option>
                    <option>300-400</option>
                    <option>400-500</option>
                    <option value='0-500'>below 500</option>
                    <option value='500-1000'>above 500</option>
                </select>
                <button onClick={searchBooks} className='btn btn-secondary m-2'>Search</button>
            </div> 

    )
}
export default SearchBar;