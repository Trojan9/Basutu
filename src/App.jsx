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

function App() {
    return (
        <Router>
           <Navbar/>
             <div>
                 <Routes>
                     <Route path ="/" element= {<Frontpages/>}/>
                     <Route path = "/Home" element = {<Home/>}/>
                     <Route path = "/Mylist" element = {<Mylist/>}/>
                     <Route path = "/Latest" element = {<Movies/>}/>
                     <Route path = "/login" element = {<Login/>}/>
                 </Routes>
                 
             </div>
        </Router>
        


    )
}

export default App
