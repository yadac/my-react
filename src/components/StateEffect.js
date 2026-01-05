import { useEffect, useState } from "react";

export default function StateEffect({ init }) {
    const [count, setCount] = useState(init);
    const [hoge, setHoge] = useState('hoge');

    useEffect(() => {
        console.log(`count is ${count}`);
    }, [count]);

    const handleClick = () => setCount(c => c + 1);

    return (
        <>
            <button type="button"
                className="border-2 border-solid"
                onClick={() => setHoge(Date.now())}>Hoge ({hoge})
            </button>
            <button type="button"
                className="border-2 border-solid"
                onClick={handleClick}>カウント
            </button>
            <p>{count} 回 クリックされました</p>
        </>
    )
}