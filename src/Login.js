import React from 'react'
import { useState } from 'react';
import './Login.css'
import {auth} from './Firebase'
import {useDispatch} from "react-redux";
import {login} from "./features/userSlice";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [name, setName] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const dispatch = useDispatch ();
        const loginToApp = (e) => {
            auth. preventDefault ();
            auth.signInwithEmailAndPassword(email, password). then (
                (userAuth) => {
                    dispatch(
                        login({
                            email: userAuth. user.email, 
                            uid: userAuth.user.uid, 
                            displayName: userAuth.user. displayName, 
                            profileUrl: userAuth. user. photoURL,

                        })
                    );
                });
    };
    const register = () => {
        if (!name) {
        return alert ("please enter a full name!");
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name, 
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                    email: userAuth.user.email, 
                    uid: userAuth.user.uid, 
                    displayName: userAuth. displayName,
                     photoUrl: userAuth. photoURL,
                }))
            })   
        })
        .catch((error) => alert(error)); 
    };
    //////////////////////////auth/////////////////////////////////////////////////////////////
  return (
   

    <div className="Login">
        <img src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png" />
        <form>
        <input //auth for name
        value={name}
        onChange={(e) => setName(e. target.value)}
        placeholder="Full name (required if registering)" type="text" />

        <input 
        values={profilePic}
        onChange={(e) => setprofilePic(e. target.value)}
        placeholder="Profile pic URL (optional)" type="text" />
    
        <input //auth for email
        value={email}
        onChange={(e) => setEmail (e. target.value)}
        placeholder="Email" type="Email" />
        
        <input  //auth for pass
        value={password}
        onChange={(e) => setPassword (e. target.value)}
        placeholder="Password" type="Password" />
        <button type='Submit'onClick={loginToApp} >Sign in</button> 
        </form>
        <p>Not a member?
        <span className='login__register'onClick={register}>Register Now</span>
        </p>

    </div>
  )
}

export default Login