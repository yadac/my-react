import { useState } from 'react'

export default function StateForm() {
    const [form, setForm] = useState({
        name: 'yamda.taro',
        age: 18
    });
    const [greet, setGreet] = useState('---');

    const handleForm = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const show = (e) => {
        setGreet(`hello, ${form.name}(${form.age}) san.`);
    }

    return (
        <form>
            <div>
                <label htmlFor='name'>name:</label>
                <input id='name' name='name' type='text'
                    className='border m-3'
                    onChange={handleForm} value={form.name} />
            </div>
            <div>
                <label htmlFor='age'>name:</label>
                <input id='age' name='age' type='text'
                    className='border m-3'
                    onChange={handleForm} value={form.age} />
            </div>
            <div>
                <button type='button'
                    onClick={show}
                    className='border m-3'>submit</button>
            </div>
            <p>{greet}</p>
        </form>
    )
}
