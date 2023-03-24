import { useState } from "react";

export default function App() {
    const [activity,setActivity] = useState('');
    const [edit,setEdit] = useState({});
    const [todos,setTodos] = useState([]);

    function generateId(){
        return Date.now();
    }
    function saveTodo(event){
        event.preventDefault();
        
        if(edit.id){
            const updatedTodo = {
                id : edit.id,
                activity
            };

            const editTodoIndex = todos.findIndex(function(todo){
                return todo.id === edit.id
            });

            const updatedTodos = [...todos];

            updatedTodos[editTodoIndex] = updatedTodo;

            setActivity('');
            setEdit({});

            return setTodos(updatedTodos);
        }

        setTodos([...todos,
            {
                id : generateId(),
                activity
            }
        ]);
        setActivity('');
    }
    function removeTodo(todoId){
        const filteredTodos = todos.filter(function(todo){
            return todo.id !== todoId;
        });

        setTodos(filteredTodos);
    }
    function editTodo(todo){
        setActivity(todo.activity);
        setEdit(todo);
    }
    return (
        <>
        <h1>Simpel Todo List</h1>
        <form onSubmit={saveTodo}>
            <input type="text" placeholder="isi aktifitas" 
            value={activity} onChange={function(event){
                setActivity(event.target.value)
            }}></input>
            <button type="submit">
                {edit.id ? 'Simpan Perubahan' : 'Tambah'}
                </button>
        </form>
        <ul>
            {todos.map(function(item){
                return <li key={item.id}>{item.activity}
                <button onClick={editTodo.bind(this, item)}> Edit</button>
                <button onClick={removeTodo.bind(this,item.id)}> Hapus</button>
                </li>
            })}
        </ul>
        </>
    );
}
