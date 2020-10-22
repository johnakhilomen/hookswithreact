import React, { useState } from 'react';

export let Header = () =>
{
    const [headerTitle, setHeaderTitle] = useState()
    const [headerSubTitle, setHeaderSubTitle] = useState()
    let createHeader = () => {
        setHeaderTitle("The Web Page Title!");
        setHeaderSubTitle("The Web Page Sub title");
    }
    return(
        <div>
            {headerTitle}
            <br></br>
            {headerSubTitle}    
            <br></br>        
            <button onClick={createHeader}>SetHeader</button>
        </div>
    )
}