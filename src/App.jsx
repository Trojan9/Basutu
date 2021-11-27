import React, { useEffect } from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Navbarcomponents/index";
import Login from "./LoginComponents/Login";
import "./styles.css";
import Movies from "./Pages/Movies"; 
import Mylist from "./Pages/Mylist";
import Home from "./Pages/Home";  
import { auth } from "./LoginComponents/firebase"
import Frontpages from "./Pages/Frontpages";
import { useStateValue } from "./LoginComponents/StateProvider"
import { SignalCellularNullSharp } from "@mui/icons-material";



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


    return (
        <Router>
           <Navbar/>
             <div>
                 <Routes>   
                     <Route path ="/" element = {<Login/>}/>
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
