import React from 'react'
import {NavLink} from 'react-router-dom'
import Logout from './Logout'
function Nav(){


  if(localStorage.getItem("token")===null)
   return null ;
     return(
        <nav className="navbar navbar-dark" style = {{boxShadow :"0 0 15px rgba(0,0,0, .6)",fontFamily :"'Roboto' , cursive"}}>
          <NavLink to = "/messenger" activeClassName = "active">Messenger</NavLink> 
          {/* <NavLink to = "/main" activeClassName = "active">Home</NavLink> */}
          <p style = {{color : "red"}}>{localStorage.getItem("username")}</p>
          <NavLink to = "/login" activeClassName = "active">login</NavLink>
          <NavLink to = "/login" activeClassName = "active"><Logout/></NavLink>
         
        </nav>
    )
}
export default Nav ;