import React from 'react'

export default (props)=>{
    console.log(props);
    const {src} = props.about;
    return (
        <img src={src} style={props.about.style} className="scrapbook-image"/>
    )
}