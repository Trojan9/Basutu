import React from 'react'
import SubNavbar from "../SubNavcomponents/index";
import Image from "../Imagecomponent/Image";

function Home() {
    return (
        <div>
           <Image 
                img = "/Movieimages/alien.jpg" alt = "alien"
           />
           <Image 
              img ="/Movieimages/inception.jpg"
           />
             <Image 
             img = "/Movieimages/joker.jpg"
           />
             <Image 
             img = "/Movieimages/starwars.jpg"
           />
             <Image 
             img="/Movieimages/strangerthings.jpg"
           />
             <Image 
             img = "/Movieimages/transformers.jpg"
           />
             <Image 
             img = "/Movieimages/avengers.jpg"
           />
             <Image 
             img="/Movieimages/game of thrones.jpg"
           />

        </div>
    );
};

export default Home;
