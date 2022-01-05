import React, { useEffect ,useState} from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Navbarcomponents/index";
import Login from "./LoginComponents/Login";
import Dropdown from "./Dropdowncomponents/Dropdown";
import "./styles.css";
import Movies from "./Pages/Movies"; 
import Mylist from "./Pages/Mylist";
import Home from "./Pages/Home";  
import { auth } from "./LoginComponents/firebase"
import Frontpages from "./Pages/Frontpages";
import { useStateValue } from "./LoginComponents/StateProvider"
import { SignalCellularNullSharp } from "@mui/icons-material";
import { Avengers, FNF, Inception, Ironman, Joker , Moneyheist1 , Sonic, Squidgame,  Transformers, Strangerthings, Gameofthrones, Starwars, Alien } from './Pages/Video';

function App() {
    const [{mylist}, dispatch ] = useStateValue();
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
        if(authUser){
            dispatch({
                type:"SET_USER",
                user: authUser
            })
        }else{
            dispatch({
                type:"SET_USER",
                user: null
            });
        }

        });
    return ()=>{
        unsubscribe()
    }
    }
    ,[])
    const [isOpen,setIsopen] =  useState(false);
function toggle (){
    setIsopen(!isOpen)
}

    return (
        <Router >
           <Navbar toggle = {toggle}/>
           <Dropdown isOpen = {isOpen} toggle ={toggle}/>
             <div> 
                 <Routes>
                     <Route path = "/Home" element = {<Home/>}/>
                     <Route path = "/Mylist" element = {<Mylist/>}/>
                     <Route path = "/Latest" element = {<Movies/>}/>
                     <Route path = "/" element = {<Login/>}/>
                     <Route path = "/Login" element = {<Login/>}/>
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
