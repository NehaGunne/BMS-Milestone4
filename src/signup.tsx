import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { bmsContext } from './context/context-provider';
let user:any={
    username:'',
    email:'',
    password:'',
}

const SignUp=()=>{
    let store:any=useContext(bmsContext);
    const history=useHistory();
    let [errUser,setUser]=useState(null);
    let [errEmail,setEmail]=useState(null);
    let [errPassword,setPassword]=useState(null);
    function handleChange(e:any){
        let key=e.target.name;
        let val=e.target.value;
        user[key]=val;

    }
    async function AddUser(){
        store.dispatch({type:'sign_up',payload:user})
        history.push('/')
       
       }
    return(
        <div className='d-flex flex-row justify-content-center mt-3'>
            <div className='login-card' style={{minWidth:'600px'}}>
                <h1 className='m-4'>Sign Up</h1>
                <div className='d-flex flex-row justify-content-center m-3'>
        <div>
            <div>
                <label htmlFor='username'>Enter username:</label>
                <input name='username' onChange={handleChange} id='username' className='form-control input'/>
                <p className='err-msg'>{errUser}</p>
            </div>
            <div>
                <label htmlFor='email'>Enter email:</label>
                <input name='email' onChange={handleChange} id='email' className='form-control input'/>
                <p className='err-msg'>{errEmail}</p>
            </div>
            <div>
                <label htmlFor='password'>create password:</label>
                <input name='password' onChange={handleChange} id='password' className='form-control input'/>
                <p className='err-msg'>{errPassword}</p>
            </div>
            <div className='d-flex flex-row justify-content-center'>
                <button onClick={AddUser} className='btn btn-secondary'>Sign up</button>
            </div>
        </div>
        </div>

            </div>
        </div>

    )
}
export default SignUp;