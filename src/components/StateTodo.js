import { useState } from "react"

let maxId = 0;
export default function StateTodo() {
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const addTodo = () => {
        console.log('Todoを追加します');
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
    const sortTodo = () => {
        console.log('Todoをソートします');
    }

    const updateTodo = (e) => {
        console.log('Todoを更新します');
        todo.map(t => {
            if (e.key === t.id) {
                setTodo(
                    [
                        ...todo,
                        { isDone: true }
                    ]);
            } else {

            }
        })
    }

    const removeTodo = () => {
        console.log('Todoを削除します');
    }

    return (
        <form>
            <div>
                <div className="bg-blue-50 p-2">
                    <label>やること：</label>
                    <input type="text" id="title" name="title"
                        className="border" onChange={handleTitle} />
                    <button type="button" onClick={addTodo} className="border">追加</button>
                    <button type="button" onClick={sortTodo} className="border">ソート</button>
                </div>
                <div>
                    <ul>
                        {todo.map(t => (
                            <li key={t.id}>
                                {t.title}
                                <button type="button" className="border p-1"
                                    onClick={updateTodo}>済</button>
                                <button type="button" className="border p-1"
                                    onClick={removeTodo}>削除</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </form>
    )
}
