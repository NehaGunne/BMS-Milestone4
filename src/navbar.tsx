import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { bmsContext } from './context/context-provider';
 
const Navbar=()=>{
    let store:any=useContext(bmsContext);
    let isAuth=store.state.isAuth
    
    const history=useHistory();
    async function logOut() {
       store.dispatch({type:'log_out'})
       history.push('/')
    }
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light nav-bg">
            <a className="navbar-brand nav-text" href="#">Book Management System</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-text nav-link active" to="/"
                >Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link nav-text"
                 to="/add-book">Add Books</Link>
               {!isAuth && <Link className="nav-item nav-link nav-text" 
                to="/login">Login</Link>}
               {!isAuth && <Link className="nav-item nav-link nav-text"
                 to="/signup">Signup</Link>}
                {isAuth && <Link className="nav-item nav-link nav-text" to='#'
                 onClick={logOut}>log out</Link>}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;