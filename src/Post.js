import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import InputOptions from './InputOptions';
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";


function Post({name, description, message, photourl}) {
  return (
    <div className="post">
    <div className="post__header">
            <Avatar /> 
        <div className="post__info">
            <h2>{name}</h2> 
            <p>{description}</p> 
         </div>
     </div>
     <div className="post__body"> 
     <p>{message}</p>
     </div>
    <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title= "Like" color="gray" />
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlinedIcon} title ="Share" color="gray" />
        <InputOptions Icon={SendOutlinedIcon}title="Send" color="gray" />

    </div>
</div>
  )
}

export default Post