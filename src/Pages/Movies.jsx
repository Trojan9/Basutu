import React from 'react';
import Ironman from './images/ironmanzone.jpg';
import fnf from './images/fast-and-furious7.jpg';
import Sonic from './images/sonic.jpg';
import Moneyheist from './images/moneyheist3.jpg';
import Squidgame from './images/squidgame1.jpg';
import Image from "../Imagecomponent/Image"
import "./Movies.css";
import {Link} from 'react-router-dom';

function Mylist (){
return (<div>
		<Link to='/video1'>
	        <Image 
                id = "10"
                img = "/Movieimages/avengers.jpg" 
                alt = "alien"
                 /></Link>
	
		<Link to='/video2'> <Image 
                id = "11"
                img = "/Movieimages/inception.jpg" 
                alt = "inception" topic="inception:"
               about="Skilled in the act of subconscious security, a man and his gand are hired to get information from a billionaire son in this tale." 
                  /></Link>
	        
		<Link to='/video3'>   
                <Image 
                id = "12"
                img = "/Movieimages/joker.jpg" 
                alt = "joker" topic="Alien:"
               about='This is a fiction movie which tells how a child survived in space.'
                  />
         	</Link>
	     
		<Link to='/video4'>   <Image 
                id = "13"
                img = "/Movieimages/alien.jpg" 
                alt = "alien" topic="Alien:"
               about='This is a fiction movie which tells how a child survived in space.'
                   /></Link> 
              
		<div className = "movies">
		<Link to='/video5'>   <Image
                 id = "14"
                 img ="/Movieimages/moneyheist3.jpg"
                />   </Link> 
	
		<Link to='/video6'> <Image
                 id = "15"
                 img ="/Movieimages/moneyheist3.jpg"
                  /></Link>
	     
		<Link to='/video7'>   <Image
                  id = "16"
                  img ="/Movieimages/moneyheist3.jpg"
                  /> </Link>
	
		<Link to='/video8'>
	            <Image
                       id = "17"
                       img ="/Movieimages/moneyheist3.jpg"
                  /></Link>
	         
	</div>
);
};

export default Mylist;
