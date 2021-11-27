import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Navbarcomponents/index";
import Login from "./Components/Login"
import "./styles.css";
import Movies from "./Pages/Movies"; 
import Mylist from "./Pages/Mylist";
import Home from "./Pages/Home";  
import Frontpages from "./Pages/Frontpages";
import { Avengers, FNF, Inception, Ironman, Joker , Moneyheist1 , Sonic, Squidgame,  Transformers, Strangerthings, Gameofthrones, Starwars, Alien } from './Pages/Video';

function App() {
    return (
        <Router>
           <Navbar/>
             <div>
                 <Routes>
                    
                     <Route path = "/Home" element = {<Home/>}/>
                     <Route path = "/Mylist" element = {<Mylist/>}/>
                     <Route path = "/Latest" element = {<Movies/>}/>
                     <Route path = "/" element = {<Login/>}/>
                     <Route path = "/video1" element = {<Avengers/>}/>
                     <Route path = "/video2" element = {<Inception/>}/>
                     <Route path = "/video3" element = {<Joker/>}/>
                     <Route path = "/video4" element = {<Ironman/>}/>
                     <Route path = "/video5" element = {<FNF/>}/>
                     <Route path = "/video6" element = {<Sonic/>}/>
                     <Route path = "/video7" element = {<Moneyheist1/>}/>
                     <Route path = "/video8" element = {<Squidgame/>}/>
                     <Route path = "/video9" element = {<Transformers/>}/>
                     <Route path = "/video10" element = {<Strangerthings/>}/>
                     <Route path = "/video11" element = {<Gameofthrones/>}/>
                     <Route path = "/video12" element = {<Starwars/>}/>
                     <Route path = "/video13" element = {<Alien/>}/>
                 </Routes>
                 
             </div>
        </Router>
        


    )
}

export default App
