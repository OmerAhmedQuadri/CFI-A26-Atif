import React from "react";

const Card = ({ name ='default', description = 'default', price ='00'})=>{
    return(
        <div style={{
            border: 'none',
            borderRadius: '3px',
            backgroundColor:'black',
            padding: '10px 20px',
            color: 'white',
            margin:'10px',
            width: '300px'
        }}>
            <h1>{name}</h1>
            <p>{description}</p>
            <small>${price}</small>
        </div>
    )
}
export default Card