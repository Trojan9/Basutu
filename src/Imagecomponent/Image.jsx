 import React from 'react';
import  "./Image.css";
import { useStateValue } from '../LoginComponents/StateProvider'; 
import Reducer from "../LoginComponents/Reducer";


function Image({img, alt,topic,about}) {
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
       <div className = "Image">
            <img className = "Imagecontent" src={img} alt = {alt}/>
            <button className="Image__button" onClick = {addToMylist}>ADD TO TVLIST</button>
        </div>
    )
}
export default Image;
