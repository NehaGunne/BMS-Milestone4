import { store } from "../context/store";


export const reducer=(state=store,action:any)=>{
    switch(action.type){
        case 'add_book':
            return {
                ...state,
                books:[...state.books,action.payload]
            }
        case 'sel_book':
            return{
                ...state,
                selBook:action.payload
            }
        case 'search':
            return{
                ...state,
                searchedBooks:action.payload
            }
        case 'del_book':
            return{
                ...state,
                books:state.books.filter((each)=>each.id!==action.payload.id)
            }
        case 'sign_up':
            return{
                ...state,
                users:[...state.users,action.payload],
                isAuth:true
            }
        case 'log_in':
            return{
                ...state,
                isAuth:true
            }
        case 'log_out':
            return{
                ...state,
                isAuth:false
            }
        default:
            return state;
    }
}