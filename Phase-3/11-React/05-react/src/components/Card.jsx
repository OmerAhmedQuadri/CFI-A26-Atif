import React from "react";

const Card = ({image , price, title, description}) =>{
    return(
        <div className="card bg-black p-1 rounded-lg">
            <div className="bg-white">
                <img src={image}alt={title} 
                className="w-full h-48 object-contain rounded-lg"
                />
            </div>
            <div className="text-center bg-white rounded mt-1">
                <h3 className="text-2xl font-bold ">{title}</h3>
                <p className="p-1.5 overflow-hidden text-ellipsis">{description}</p>
                <button
                    className="bg-black mb-1.5 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer hover:bg-gray-800"
                >Buy now: ${price}</button>
            </div>
        </div>
    )
}

export default Card