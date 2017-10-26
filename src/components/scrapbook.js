import  React from "react";
import './scrapbook.css'
import imageData from './image_data'
import ScrapbookImages from './scrapbook_images'

export default (props) => {
    const images = imageData.map((img, index)=>{
        return <ScrapbookImages key={index} about={img}/>
    });
    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
}