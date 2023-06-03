import React from "react"
import { FaStar, FaRegHeart } from "react-icons/fa";
import "./style.css"



const CardContent = ({ src, title, distance, date, price }) => {
    return (


        <div className="card">
          
            <div>
            
                <img className="card-img" src={src} alt="img">
                </img>
                <FaRegHeart className="iconheart"/>
            </div>
         
            <div className="card-body">
                <div className="card-rel">
                    <div className="card-title"> <span>{title}</span></div>
                    <div className="star-point"><span><FaStar /> 4.85</span></div>
                </div>
                <div className="card-dist"><span>{distance}</span></div>
                <div className="card-date"><span><span>{date}</span></span></div>
                <div className="card-price"><span><span><b>{price}</b> night</span></span></div>
            </div>
          
           
        </div>


    )
}


export default CardContent