import React from 'react'
import { Nav,NavLink,Bars,NavMenu ,Logo} from "./NavbarElement"; 
import SearchIcon from "@mui/icons-material/Search";
import "../Components/Header.css";
import { Link } from "react-router-dom";
import "./nav.css";
import { useStateValue } from "../LoginComponents/StateProvider";
import { auth } from '../LoginComponents/firebase';


function Navbar({toggle}) {
    const [ {mylist,user} ] = useStateValue()
    const login = () =>{
        if(user){
            auth.signOut()
        }
    }
    return (
        <div>
            <Nav>
                <Bars onClick = {toggle}/>
                  <NavMenu>
                     <Logo>
                        MY MOVIES
                     </Logo>

                    <div className = "header__search">
                           <SearchIcon className = "header__searchicon"/>
                    <input className = "header__searchinput" placeholder = "Search"></input>
                     </div>
                     <NavLink to = "/Home">
                        HOME
                    </NavLink>
                    <NavLink to = "/mylist">
                        TV LIST
                        <p>{mylist.length}</p>
                    </NavLink>
                    <NavLink to = "/Latest">
                        MOVIES
                    </NavLink>
                </NavMenu>
                <NavLink to = {!user && "/login"}>
                         <div onClick = {login} className = "header__signin"> 
                             <span>Hello </span>
                             <span>{user?.email}</span>
                             <span>{!user?"Sign In":"Sign Out"}</span>
                        </div>
               </NavLink>
            </Nav>
        </div>
    )
}

export default Navbar;
