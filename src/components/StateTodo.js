import { useState } from "react"

let maxId = 0;
export default function StateTodo() {
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState(false);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleAdd = () => {
        setTodo(todo => [
            ...todo,
            {
                id: ++maxId,
                title: title,
                created: new Date(),
                isDone: false
            },
        ]);
    }

    const handleSort = () => {

        setDesc(prevDesc => {
            const newDesc = !desc;
            setTodo(prevTodo => {
                const copied = [...todo];
                copied.sort((a, b) => {
                    const timeA = a.created.getTime();
                    const timeB = b.created.getTime();
                    return newDesc ? timeB - timeA : timeA - timeB;
                });
                return copied;
            })
            return newDesc;
        })
    }

    const handleDone = (e) => {
        setTodo(prevTodo => prevTodo.map(t => {
            if (t.id === Number(e.target.dataset.id)) {
                return {
                    ...t,
                    isDone: !t.isDone
                }
            } else {
                return t;
            }
        }));
    }

    const handleRemove = (e) => {
        setTodo(
            todo.filter((t) => { return t.id !== Number(e.target.dataset.id) })
        );
    }

    return (
        <form>
            <div>
                <div className="bg-blue-50 p-2">
                    <label>やること：</label>
                    <input type="text" id="title" name="title"
                        className="border" onChange={handleTitle} />
                    <button type="button" onClick={handleAdd} className="border">追加</button>
                    <button type="button" onClick={handleSort} className="border">
                        ソート{desc ? '↑' : '↓'}
                    </button>
                </div>
                <div>
                    <ul>
                        {todo.map(t => (
                            <li key={t.id} className={t.isDone ? "line-through" : ""}>
                                {t.title}{t.created.toString()}
                                <button type="button" className="border p-1"
                                    onClick={handleDone} data-id={t.id}>済</button>
                                <button type="button" className="border p-1"
                                    onClick={handleRemove} data-id={t.id}>削除</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </form>
    )
}
