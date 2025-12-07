import React from "react";

export default function MyEvent() {
    const current = (e, type) => {
        const d = new Date();
        {
            switch (type) {
                case 'date':
                    console.log(d.toLocaleDateString());
                    break;
                case 'time':
                    console.log(d.toLocaleTimeString());
                    break;
                default:
                    console.log(d.toLocaleString());
                    break;
            }
        }
    }
    const current2 = e => {
        console.log(e.target.dataset.type);
    }

    return (
        <React.Fragment>
            <button onClick={e => { current(e, 'date') }} className="border-4 border-solid p-2 m-10">click me</button>
            <button data-type="time" onClick={current2} className="border-4 border-solid p-2 m-10">click me 2</button>
        </React.Fragment>
    )
}