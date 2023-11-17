import React from 'react'
import { useLocation } from 'react-router-dom'

function Colors() {
    let location = useLocation()
    let colors = [
        "Red",
        "Orange",
        "Green",
        "Blue",
        "Purple",
        "Brown",
        "Black",
        "Gray",
        "Gold",
        "Maroon",
        "Coral",]
        
       
    return (

        <ul className="colors">
            {colors.map((color, i) => (
                <li key={i}
                className= {location.pathname === "/compare-product" 
                ? 'colorsCompare'
                : '' }
                style={{ backgroundColor: color, width:"25px",height:"25px", borderRadius:"50%" }} ></li>
            ))}
        </ul>

    )
}

export default Colors
