import React from 'react';
import { Link } from "react-router-dom";
import App from "../App";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Index from "../Navbarcomponents/index";


function Header() {
    return (
        <nav className = "header">
            <div className = "header__logo">
                MY MOVIES
            </div>
            <div className = "header__search">
                <SearchIcon className = "header__searchicon"/>
                <input className = "header__searchinput" placeholder = "Search"></input>
            </div>
            <div className = "header__option">
                <Link className ="header__link" to="/" >
                      <span className= "header__option1">HOME</span>
                </Link>
                <Link className ="header__link" to="/">
                      <span className = "header__option2">TV SHOWS</span>     
                </Link>
                 <Link className ="header__link" to="/login">
                      <span className = "header__option3">MOVIES</span>
                </Link>
            </div>
            <Link className ="header__link" to="/login">
            <div className = "header__signin"> 
                <span>PROFILE</span>
            </div>
            </Link>
            
        </nav>
      
    )
}

export default Header
