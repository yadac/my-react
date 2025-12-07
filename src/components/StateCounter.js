import { useState } from "react";
export default function StateCounter({ updateTotal }) {
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        setCount(c => c + 1);
        updateTotal(1);
    };
    return (
        <div>
            <button
                className="m-4 p-10 bg-blue-100 w-1/4 content-center hover:bg-red-300"
                onClick={clickHandler}
            >{count}</button>
        </div>
    )
}
