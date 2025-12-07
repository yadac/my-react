import { useState } from "react"

export default function ScreenPoint({ children }) {

    const [screenX, setScreenX] = useState(0);
    const [screenY, setScreenY] = useState(0);
    const mouseHandler = (e) => {
        setScreenX(x => x = e.screenX);
        setScreenY(y => y = e.screenY);
    }
    return (
        <div onMouseMove={mouseHandler} className="border">
            <p>X座標：{screenX}</p>
            <p>Y座標：{screenY}</p>
            {children}
        </div>
    )
}
