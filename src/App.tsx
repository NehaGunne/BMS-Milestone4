import React, { useEffect, useState } from 'react';
import AddBook from './add-book-page';
import Home from './homePage'
import Login from './login-page';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './navbar';
import Description from './description'; 
import SignUp from './signup';
import ProtectedRoute from './protected-route';
import ContextProvider from './context/context-provider';
import SearchedBooks from './searched-books';


function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar/>
          <div>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/search' component={SearchedBooks}/>
              <Route path='/book/:id' >
                <Description/>
              </Route>
              <ProtectedRoute path='/add-book' component={AddBook}/>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/signup'>
                <SignUp/>
              </Route>
            </Switch>
          </div>

      </Router>

    </ContextProvider>
  )
}

export default App;
