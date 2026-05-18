import React from "react";

const Button2 = ({size, text, color, clickHandler, disabled})=>{
    let colorClass = ''
    switch(color){
        case "primary":
            colorClass = "bg-blue-500 hover:bg-blue-700"
            break
        case "Secondary":
            colorClass = "bg-gray-500 hover:bg-gray-700"
            break
        case "Success":
            colorClass = "bg-green-500 hover:bg-green-700"
            break
        case "Warning":
            colorClass = "bg-yellow-500 hover:bg-yellow-700"
            break
        case "Danger":
            colorClass = "bg-red-500 hover:bg-red-700"
            break
        default:
            colorClass = "bg-blue-500 hover:bg-blue-700"
    }

    return(
        <button
        onClick={disabled ? null: clickHandler}
        className={`font-bold text-white border-none rounded ${colorClass}
        
            ${size == "small" && "px-4 py-2 text-sm"}
            ${size == "medium" && "px-6 py-3 text-md"}
            ${size == "large" && "px-8 py-4 text-lg"}
            
            ${disabled ? "opacity-50 cursor-not-allowed": "cursor-pointer"}
        `}
        >
            {text}
        </button>
    )
}
export default Button2