import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from './InputOptions';
import Imagelcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDay from "@material-ui/icons/CalendarViewDay";
import Post from './Post'
import { db } from "./Firebase.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]); 
    

    useEffect(()=> {
        db.collection ("posts")
         .orderBy ("timestamp", "desc")
        .onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc. id,
                data: doc.data(),
            }))
        )
        );  
        },[]);

    const sendPost = (event) => {
        event.preventDefault();
        db.collection( 'posts').add({
            name: 'vedant lalala',
            description: 'this is a test',
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp ()


        })
    };
  return (
    <div className="Feed">
    <div className="feed__inputContainer">
    <div className="feed__input">
    <CreateIcon /> 
    <form>
    <input  value = {input}  onChange={e => setInput(e.target.value)} type="text" />
    <button onClick={sendPost}type='submit'>
        Send
        </button> 
    </form>
    </div>
    <div className="feed__inputOptions">
        {/* <InputOptions/> */}
        <InputOptions Icon={Imagelcon} title= 'Photo' color="#7085F9"/>
        <InputOptions Icon={SubscriptionsIcon} title= 'Video'color="#E7A33E"/>
        <InputOptions Icon={EventNoteIcon} title= 'Event' color="#C0CBCD"/>
        <InputOptions Icon={CalendarViewDay} title= 'Write Article'color="green"/>
    </div>
    </div>
    {posts.map(({ id, data: { name, description, message,
    photoUrl } }) => (
        <Post 
        key={id} 
        name={name} 
        description={description}
        message={message} 
        photoUrl={photoUrl}
        />

    
     
    ))}

    {/* <Post name = "Vedant" description = "developer" message="great"/> */}
    </div>
  )
}

export default Feed