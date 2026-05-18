import React from "react";

const Button = ({clickHandler, type, text, size, disabled})=>{
    return(
        <>
        <button 
            onClick={clickHandler}
            className={`rounded
                ${size == 'sm'? "py-2 px-4 text-sm":"py-2 px-4 text-lg"}
                ${type == "primary"?"bg-blue-500 hover:bg-blue-700 text-white":
                "bg-gray-700 hover:bg-gray-800 text-white"}
                ${disabled && 'opacity-50 cursor-not-allowed'}
                `}
            disabled = {disabled}
        >
            {text}
        </button>
        </>
    )
}
export default Button;