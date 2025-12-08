import { useRef } from "react";

export default function StateFormUC() {

    const name = useRef(null);
    const age = useRef(null);

    const show = () => {
        console.log(`hello, ${name.current.value}(${age.current.value}) san.`);
    }

    return (
        <form>
            <div>
                <label htmlFor='name'>name:</label>
                <input id='name' name='name' type='text'
                    className='border m-3'
                    ref={name} defaultValue="佐藤理央" />
            </div>
            <div>
                <label htmlFor='age'>name:</label>
                <input id='age' name='age' type='text'
                    className='border m-3'
                    ref={age} defaultValue="18" />
            </div>
            <div>
                <button type='button'
                    onClick={show}
                    className='border m-3'>submit</button>
            </div>
        </form>
    )
}
