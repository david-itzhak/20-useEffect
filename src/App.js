import './App.css';
import {useEffect, useState} from "react";

function App() {
    let [todo, setTodo] = useState(null);
    useEffect(() => {
        console.log("Callback in useEffect is called")
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodo(json))
    }, []);
    console.log("App is rendered");
    console.log(todo);

    return (
        <div className="App">
            {todo && todo.title}
        </div>
    );
}

export default App;
