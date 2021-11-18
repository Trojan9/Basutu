import React from 'react';
import  "./Image.css";

function Image(props) {
    return (
        <div className = "Image">
            <img className = "Imagecontent" src={props.img}/>
        </div>
    )
}

export default Image
