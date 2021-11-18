import React from 'react'
import { Nav,NavLink,Bars,NavMenu } from "./NavbarElement"; 
import SearchIcon from "@mui/icons-material/Search";
import "../Components/Header.css";
import { Link } from "react-router-dom";
import "./nav.css";


function Navbar() {
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
                        TV LIST
                    </NavLink>
                    <NavLink to = "/Latest">
                        MOVIES
                    </NavLink>
                
                    <Link className ="header__link" to="/login">
                         <div className = "header__signin"> 
                             <span>PROFILE</span>
                        </div>
                     </Link>
         
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar;
