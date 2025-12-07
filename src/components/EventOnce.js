import React from 'react'
import { useState } from 'react'
export default function EventOnce() {
    const [click, setClick] = useState(false);
    const [result, setResult] = useState('---');
    const resultArray = ['poor', 'good'];
    const clickHandler = () => {
        if (!click) {
            setResult(resultArray[Math.round(Math.random())]);
            console.log('set result');
        }
        setClick(true);
    }
    return (
        <div>
            <p>result is {result}</p>
            <button onClick={clickHandler} className='border-2 m-10'>click me</button>
        </div>
    )
}
