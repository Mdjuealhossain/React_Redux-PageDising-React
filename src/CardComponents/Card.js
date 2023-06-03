

import React from "react"
import ProductData from "../productData";

import "./style.css"
import CardContent from ".";


const Card = () => {
    return (

      
         <div className="cards">
            {ProductData.map((item) => {
                const { src, title, distance, date, price } = item
                return (
                    <div>
                        <CardContent src={src} title={title} distance={distance} date={date} price={price} />
                    </div>
                )
            })}
        </div>
  
    )
}
export default Card