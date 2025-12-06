import { useState } from "react"

export default function StateBasic({ init }) {
    const [count, setCount] = useState(init);
    const handleClick = () => { setCount(count + 1) }
    let count2 = 1;
    const handleClick2 = () => { count2++ }
    const handleClickAll = () => {
        handleClick();
        handleClick2();
    }
    return (
        <div>
            <button onClick={handleClickAll}>カウント</button>
            <p>count = {count}</p>
            <p>count2 = {count2}</p>
        </div>
    )
}
