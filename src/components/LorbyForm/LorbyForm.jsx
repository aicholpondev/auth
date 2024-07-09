import React from "react";
import img from"../../assets/image/lorby-img.png";

export default function LorbyForm(){
    return(
        <div className="lorby__general">
            <img src={img} alt="img"/>
             <h1>Lorby</h1>
                <p>Твой личный репетитор</p>
        </div>
    )
}