import React from 'react';
import { useState } from 'react';

function FunctionComponent(props) {

    const[count,setCount]=useState(0);
       
    const increament=()=>{
         setCount(count+1);
    }
    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={increament}>Increament</button>
        </div>
    );
}

export default FunctionComponent;