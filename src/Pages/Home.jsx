import React from 'react'
import Navbar from "../Navbarcomponents/index";
import Image from "../Imagecomponent/Image";

function Home() {
    return (
        <div>
        <div>
           <Image 
                id = "1"
                img = "/Movieimages/alien.jpg" alt = "alien"
           />
           <Image 
               id = "2"
              img ="/Movieimages/inception.jpg"
              alt = "inception"
           />
             <Image 
             id = "3"
             img = "/Movieimages/joker.jpg"
             alt = "joker"
           />
             <Image 
             id = "4"
             img = "/Movieimages/starwars.jpg"
             alt = "starwars" 
           />
             <Image 
             id = "5"
             img="/Movieimages/strangerthings.jpg"
             alt = "strangerthings"
           />
             <Image 
             id = "6"
             img = "/Movieimages/transformers.jpg"
             alt = "transformers"
           />
             <Image 
             id = "7"
             img = "/Movieimages/avengers.jpg"
             alt = "avengers"
           />
             <Image 
             id = "8"
             img="/Movieimages/game of thrones.jpg"
             alt ="game of thrones"
           />

        </div>
        </div>
    );
};

export default Home;
