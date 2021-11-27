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
        <div onClick = {removeMovie}className = "mylistmovies">
            <img className = "mylistmovies__img" id ={id}src ={img} alt = {alt} />
        </div>
    )
}

export default Mylistmovies;
