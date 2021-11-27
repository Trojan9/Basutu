 import React from 'react';
import  "./Image.css";
import { useStateValue } from '../LoginComponents/StateProvider'; 
import Reducer from "../LoginComponents/Reducer";


function Image({img, alt}) {
    const [{mylist},dispatch] = useStateValue()
    const addToMylist = () => {
      
         dispatch ({
             type : "ADD_TO_MYLIST",
             item: {
               src:img,
               alt: alt
             }
    
         })
    
    
    }
    
    return (
        <div onClick = {addToMylist} className = "Image">
            <img  className = "Imagecontent" src = {img} alt = {alt}/>
        </div>
    )
}
export default Image;
