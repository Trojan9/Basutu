import React from 'react'
import { Nav,NavLink,Bars,NavMenu } from "./NavbarElement"; 
import SearchIcon from "@mui/icons-material/Search";
import "../Components/Header.css";
import { Link } from "react-router-dom";
import "./nav.css";
import { useStateValue } from "../LoginComponents/StateProvider";
import { auth } from '../LoginComponents/firebase';

function Navbar() {
    const [ {mylist,user} ] = useStateValue()
    const login = () =>{
        if(user){
            auth.signOut()
        }
    }
    return (
        <div>
            <Nav>
                <Bars/>
                <NavMenu>
                     <div className = "header__logo">
                           MY MOVIES
                     </div>
                     <div className = "header__search">
                           <SearchIcon className = "header__searchicon"/>
                              <input className = "header__searchinput" placeholder = "Search"></input>
                     </div>
                     <NavLink to = "/Home">
                        HOME
                    </NavLink>
                    <NavLink to = "/mylist">
                        <p>{mylist.length}</p>
                        TV LIST
                    </NavLink>
                    <NavLink to = "/Latest">
                        MOVIES
                    </NavLink>
                    <NavLink to = {!user && "/login"}>
                         <div onClick = {login} className = "header__signin"> 
                             <span>Hello </span>
                             <span>{user?.email}</span>
                             <span>{!user?"Sign In":"Sign Out"}</span>
                        </div>
                     </NavLink>   
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar;
