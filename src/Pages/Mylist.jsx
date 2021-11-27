import React from 'react';
import Money from './images/samuele-giglio-CeJNDEIJQyU-unsplash.jpg';
import "./Mylist.css";
import {Link} from 'react-router-dom';

function Mylist (){
return (
	<div className = "mylist">
	<Link to='/video1'> <img src={Money} alt='money heist movie' /> </Link>
	</div>
);
};

export default Mylist;
