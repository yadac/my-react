import { useState } from "react"

let maxId = 0;
export default function StateTodo() {
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleAdd = () => {
        setTodo([
            ...todo,
            {
                id: ++maxId,
                title: title,
                created: new Date(),
                isDone: false
            }
        ]);
    }
    const handleSort = () => {
        console.log('Todoをソートします');
    }

    const handleDone = (e) => {
        setTodo(todo.map(t => {
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

    const handleRemove = () => {
        console.log('Todoを削除します');
    }

    return (
        <form>
            <div>
                <div className="bg-blue-50 p-2">
                    <label>やること：</label>
                    <input type="text" id="title" name="title"
                        className="border" onChange={handleTitle} />
                    <button type="button" onClick={handleAdd} className="border">追加</button>
                    <button type="button" onClick={handleSort} className="border">ソート</button>
                </div>
                <div>
                    <ul>
                        {todo.map(t => (
                            <li key={t.id} className={t.isDone ? "line-through" : ""}>
                                {t.title}
                                <button type="button" className="border p-1"
                                    onClick={handleDone} data-id={t.id}>済</button>
                                <button type="button" className="border p-1"
                                    onClick={handleRemove}>削除</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </form>
    )
}
