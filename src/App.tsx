import React, {useEffect, useState} from 'react';
import './App.css';


interface ToDoListInterface {
    id: number,
    todo: string,
    done: boolean,
    time: Date
}


function App() {

    // Input State
    const [input, setInput] = useState("");
    // Todos list state
    const [todos, setTodos] = useState<Array<ToDoListInterface>>([]);

    // Custom setter function
    const todoSetter = (data: Array<ToDoListInterface>) => {
        setTodos(data);
        saveTodos(data);
    };

    // Insert single todo-item
    const insertTodo = (value: ToDoListInterface) => {
        todoSetter([
            ...todos,
            value
        ]);
        setInput("");
    };

    // Saves todo_list in localstorage
    const saveTodos = (item: Array<ToDoListInterface>) => {
        localStorage.setItem("todos", JSON.stringify(item),)
    };

    // Gets todo_list from localstorage
    const getTodos = () => {
        const todos = localStorage.getItem("todos");
        if (todos) {
            setTodos(JSON.parse(todos))
        }
    };

    // On Component 1st render get todos from localstore
    useEffect(() => {
        getTodos()
    }, []);

    // Last index
    const getLastIndex = () => {
        return todos.length ? todos[todos.length - 1].id + 1 : 0;
    };

    // Input Change Event Handler
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    };

    // Input Key Down Event Handler
    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClick()
        }
    };

    // Button click event
    const onClick = () => {
        input && insertTodo({
            id: getLastIndex(),
            todo: input,
            done: false,
            time: new Date()
        });
    };

    // Delete todo event
    const deleteTodo = (id: number) => {
        todoSetter(todos.filter((each: ToDoListInterface) => each.id !== id));
    };

    // Set Todo done
    const setTodoDone = (id: number) => {
        const searchedTodo = todos.filter((each: ToDoListInterface) => each.id === id);
        if (searchedTodo.length) {
            const index = todos.indexOf(searchedTodo[0]);
            const updatedTodos = todos;
            updatedTodos[index].done = !updatedTodos[index].done;
            todoSetter([...updatedTodos]);
        }
    };

    // Get Date
    const getDate = (getDate: Date) => {
        const date = new Date(getDate);
        return `${date.getHours()}:${date.getMinutes()}${date.getHours() >= 12 ? "pm" : "am"} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    };

    return (
        <div className="App">
            <section className={"todo-list"}>
                <h3 className={'header-title todo-list-div'}>To Do List</h3>
                <div className={"input-box"}>
                    <input className={"input"} value={input} onKeyDown={onKeyDown} onChange={onChange}
                           placeholder={"Todo"}/>
                    <button className={'button'} onClick={onClick}>Add Todo</button>
                </div>
                <div className={"todo-list-div todo-list-div-ul"}>
                    <ul>
                        {
                            todos.map((each: ToDoListInterface) =>
                                <li key={each.id}>
                                    <div className={each.done ? "todo done" : "todo"}>
                                        <span onClick={() => {
                                            setTodoDone(each.id)
                                        }}>{each.todo}</span>
                                        <span>{getDate(each.time)}</span>
                                    </div>
                                    <span className={"delete"} onClick={() => {
                                        deleteTodo(each.id)
                                    }}> Delete </span>
                                </li>)
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}


export default App;
