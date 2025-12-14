import { useState, useRef } from "react"

export default function StateTodo2() {

    const buttonBase = "bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 p-2 border border-blue-700 rounded";
    const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [desc, setDesc] = useState(false);
    const nextIdRef = useRef(1);

    // タスク名
    const handleTitle = (e) => {
        setTitle(prevTitle => {
            return e.target.value;
        });
    }

    // 追加
    const handleAdd = () => {
        const id = nextIdRef.current++;
        setTodoList(prev => {
            return [
                ...prev,
                {
                    id,
                    title,
                    created: new Date(),
                    isDone: false
                },
            ]
        });
    }

    // 更新
    const handleDone = (id) => {
        setTodoList(prev => {
            return prev.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isDone: !item.isDone
                    }
                } else {
                    return item;
                }
            })
        })
    }

    // 削除
    const handleRemove = (id) => {
        setTodoList(prev => prev.filter(item => item.id !== id))
    }

    // 並び替え
    const handleSort = () => {
        setDesc(prevDesc => {
            const newDesc = !prevDesc;
            setTodoList(prev => {
                const copied = [...prev];
                copied.sort((a, b) => {
                    const timeA = a.created.getTime();
                    const timeB = b.created.getTime();
                    return newDesc ? timeB - timeA : timeA - timeB;
                });
                return copied;
            });
            return newDesc;
        });
    }

    return (
        <div>
            <div>
                <label>タスク：</label>
                <input type="text" id="title" name="title" onChange={handleTitle} value={title}
                    className="border-2 border-solid" />
                <button type="button" onClick={handleAdd}>追加</button>
                <button type="button" onClick={handleSort}>ソート{desc ? '↑' : '↓'}</button>
            </div>
            <div>
                <ul>
                    {
                        todoList.map(item => {
                            return (
                                <li key={item.id} className={`flex items-center gap-2 ${item.isDone ? "line-through" : ""}`}>
                                    <span>{item.title}</span>
                                    <span className="text-gray-500">{item.created.toLocaleString()}</span>
                                    <button type="button" onClick={() => handleDone(item.id)} className={buttonBase}>済</button>
                                    <button type="button" onClick={() => handleRemove(item.id)} className={buttonBase}>削除</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
