import React from 'react';
import  "./Image.css";

function Image(props) {
    return (
        <div className = "Image">
            <img className = "Imagecontent" src={props.img} alt = {props.alt}/>
            <h3 className='topic'>{props.topic}</h3>
		<span className='about'>{props.about}</span>
        </div>
    )
}

export default Image
