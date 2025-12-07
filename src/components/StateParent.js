import { useState } from 'react'
import StateCounter from './StateCounter'

export default function StateParent() {
    const [total, setTotal] = useState(0);
    const updateTotal = (step) => { setTotal(total => total + step) }
    return (
        <div>
            <p>total: {total}</p>
            <StateCounter updateTotal={updateTotal} />
            <StateCounter updateTotal={updateTotal} />
            <StateCounter updateTotal={updateTotal} />
        </div >
    )
}
