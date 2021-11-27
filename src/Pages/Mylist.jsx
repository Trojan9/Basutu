import React from 'react';
import { FaBasketballBall } from 'react-icons/fa';
import { useStateValue } from "../LoginComponents/StateProvider";
import "./Mylist.css";
import Mylistmovies from "./Mylistmovies";
import Money from './images/samuele-giglio-CeJNDEIJQyU-unsplash.jpg';
import "./Mylist.css";
import {Link} from 'react-router-dom';

function Mylist (){
	const [{ mylist }] = useStateValue()
return (
	<div className = "mylist">
	   {mylist?.length === 0 ? 
	   (<div>
		<h2>Your list is empty</h2>
	    </div>):(
		<div>
			<h2>Your List</h2>
		    <div className ="mylist__movies">
			{mylist.map(item => 
			<Mylistmovies
			    id = {item.id}
			   img = {item.src}
			   alt = {item.alt}
			/>)}
	      	</div>
	   </div>
	   )}</div>
	   	)}

export default Mylist;  
