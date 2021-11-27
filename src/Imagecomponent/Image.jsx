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
        <div onClick = {addToMylist} className = "Image">
            <img className = "Imagecontent" src={img} alt = {alt}/>
            <h3 className='topic'>{topic}</h3>
		    <span className='about'>{about}</span>
        </div>
    )
}
export default Image;
