import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from "../Navbarcomponents/index";
import Image from "../Imagecomponent/Image";

function Home() {
    return (
        <div>
        <Link to='/video13'>
          <Image 
                id = "1"
                img = "/Movieimages/alien.jpg" 
                alt = "alien" topic="Alien:"
               about='This is a fiction movie which tells how a child survived in space.'
           /></Link>
           <Link to='/video2'>
             <Image 
              id = "2"
              img ="/Movieimages/inception.jpg"
               topic="Inception:" 
               about="Skilled in the act of subconscious security, a man and his gand are hired to get information from a billionaire son in this tale. "
           /></Link>
            <Link to='/video3'>
             <Image 
             id = "3"
             img = "/Movieimages/joker.jpg"
              topic="Joker:" 
              about="A mentally disturbed man is assigned to a therapist for help. Struggling to gain sanity he gives up and decides to become a villian."
           /></Link>
             <Link to='/video12'>
               <Image 
               id = "4"
             img = "/Movieimages/starwars.jpg" 
             topic="Star wars:"
              about="The Rebels fight against the nefarious Darth Vader from the Galactic Empire, a tyrannical army intent on destroying civilizations across the universe."
           /></Link>
             <Link to='/video10'>
               <Image 
               id = "5"
             img="/Movieimages/strangerthings.jpg"
              topic=" Stranger Things"
               about="When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
           /></Link>
             <Link to='/video9'>
               <Image 
               id = "6"
             img = "/Movieimages/transformers.jpg" 
             topic="Transformers:"
              about="An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager."
           /></Link>
             <Link to='/video1'>
               <Image 
               id = "7"
             img = "/Movieimages/avengers.jpg"
              topic="Avengers:" 
              about="Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
           /></Link>
             <Link to='/video11'>
               <Image 
               id = "8"
             img="/Movieimages/game of thrones.jpg" 
             about="Nations battle to make themselves the kings of Iron throne." 
             topic="Game of thrones:"
           /></Link>

        </div>
      
    );
};

export default Home;
