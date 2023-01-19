import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import { selectUser } from "./features/userSlice" ;
import {useSelector } from "react-redux";
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed.js'
import Login from './Login.js'
import {useDispatch} from "react-redux";
import {login } from "./features/userSlice";
import {logout } from "./features/userSlice";
import {auth} from './Firebase'
import Widgets from './Widgets';
function App() {
  const user = useSelector(selectUser)
  const dispatch= useDispatch();

  useEffect (() => {
    auth.onAuthStateChanged ((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
             email: userAuth.user.email, 
             uid: userAuth.user.uid, 
             displayName: userAuth.displayName, 
             photoURL: userAuth.photoURL,
                })
    );
              }else {
                dispatch( logout ()) ;
              }
            });
 }, []);






  return (
    <div className="app">
     < Header />
     {!user ? (
       <Login />
     ) :(
     <div className="app__body">
     <Sidebar />
     <Feed />
     <Widgets />
     </div>
     )}

    </div>
  );
}

export default App;
