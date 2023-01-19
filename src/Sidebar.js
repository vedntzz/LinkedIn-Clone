import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector (selectUser);
    const recentItem = (topic) => (   //function is used for reused hastags {{props}} no extra component needed 
        <div className="sidebar__recentItem"> 
        <span className="sidebar__hash">#</span> 
        <p>{topic}</p>
        
        </div>
    );
  return (
    <div className="sidebar"> 
    <div className= "sidebar__top">
        <img src="https://images.unsplash.com/photo-1673933581510-3e3cab6d046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"alt=""/>
        <Avatar className= "sidebar__avatar" />
        <h2>Vedant</h2>
        <h4>lala@gmail.com</h4>
        </div>
                <div className="sidebar_stats">
        <div className="sidebar__stat">
             <p>Who viewed you</p>
            <p className="sidebar_statNumber">2,543</p> 
            </div>
            <div className="sidebar__stat">
             <p>views on post</p>
            <p className="sidebar_statNumber">2,543</p> 
            </div>
            </div>

            <div className="sidebar__bottom"> 
            <h5>Recent</h5>
            {recentItem('reactis')}
            {recentItem('reactis')}
            {recentItem('reactis')}
            {recentItem('reactis')}
            {recentItem('reactis')}

            </div>
    </div>
  )
}

export default Sidebar