import React from 'react';
import { useStateValue } from '../LoginComponents/StateProvider';
import "./Mylistmovies.css" 

function Mylistmovies({img , alt, id}) {
    const [{mylist },dispatch] = useStateValue();
    const removeMovie = () => {
         dispatch({
             type: "REMOVE_FROM_MYLIST",
             id:  id
        })
    }
    return (
        <div className = "mylistmovies">

            <img className = "mylistmovies__img" id ={id}src ={img} alt = {alt} />
            <button className = "mylistmovies__button" onClick = {removeMovie}>REMOVE FROM TVLIST</button>
            
        </div>
)
}

export default Mylistmovies;
