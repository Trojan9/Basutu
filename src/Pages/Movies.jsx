import React from 'react';
import Ironman from './images/ironmanzone.jpg';
import fnf from './images/fast-and-furious7.jpg';
import Sonic from './images/sonic.jpg';
import Moneyheist from './images/moneyheist3.jpg';
import Squidgame from './images/squidgame1.jpg';
import "./Movies.css";
import {Link} from 'react-router-dom';

function Mylist (){
return (<div>
		<div className = "movies">
		<Link to='/video1'> <img src='/Movieimages/avengers.jpg' alt='money heist movie' /> </Link>
		<h3 className='topic'>The Avengers:</h3>
		<span className='about'>Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</span>
		</div>

		<div className = "movies">
		<Link to='/video2'> <img src='/Movieimages/inception.jpg' alt='money heist movie' /> </Link>
		<h3 className='topic'>Inception:</h3>
		<span className='about'>Skilled in the act of subconscious security, a man and his gand are hired to get information from a billionaire son in this tale. </span>
		</div>

		<div className = "movies">
		<Link to='/video3'> <img src='/Movieimages/joker.jpg' alt='money heist movie' /> </Link>
		<h3 className='topic'>Joker:</h3>
		<span className='about'>A mentally disturbed man is assigned to a therapist for help. Struggling to gain sanity he gives up and decides to become a villian.</span>
		</div>

		<div className = "movies">
		<Link to='/video4'> <img src={Ironman} alt='money heist movie' /> </Link>
		<h3 className='topic'>Iron man:</h3>
		<span className='about'>A mentally disturbed man is assigned to a therapist for help. Struggling to gain sanity he gives up and decides to become a villian.</span>
		</div>

		<div className = "movies">
		<Link to='/video5'> <img src={fnf} alt='money heist movie' /> </Link>
		<h3 className='topic'>Fast and Furious 7:</h3>
		<span className='about'>Don is called back with his team to help the government recover a lost devices, this takes them through alot of challenges. Watch to get the details.</span>
		</div>

		<div className = "movies">
		<Link to='/video6'> <img src={Sonic} alt='money heist movie' /> </Link>
		<h3 className='topic'>Sonic:</h3>
		<span className='about'>Sonic gets into the land of humans after escaping the hands of captors from his land, but now his powers have been discovered and wants to be harnessed for evil.</span>
		</div>

		<div className = "movies">
		<Link to='/video7'> <img src={Moneyheist} alt='money heist movie' /> </Link>
		<h3 className='topic'>Money heist season 1:</h3>
		<span className='about'>A group comes together to steal money from a bank in this series.</span>
		</div>

		<div className = "movies">
		<Link to='/video8'> <img src={Squidgame} alt='money heist movie' /> </Link>
		<h3 className='topic'>Squid game season 1:</h3>
		<span className='about'>People come together to play a game where losers die. An intriguing and captivating series.</span>
		</div>
	</div>
);
};

export default Mylist;
