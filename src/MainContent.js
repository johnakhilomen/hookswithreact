import React, { useState, useEffect } from 'react';

const colors = ["blue", "red", "gray", "yellow"];
let getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}
export let MainContent = () => {
    const [color, setColor] = useState("");
    useEffect(()=>{
        setColor(getRandomColor);
    }, [color]);
    return(<div>
        <h1 style={{color: getRandomColor()}}>Some text here!</h1>
    </div>)
}