import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import "./main.css"
import { addTodo, removeTodo } from "../../features/todoActions";

function TodoList() {
  //Se extrae de React Redux la función de dispatch para ejecutar una acción
  const dispatch: AppDispatch = useDispatch();
  //Se extrae de React Redux la función useSelector para obtener el estado
 const todos = useSelector((state: RootState) => state.todos);
 
  const [todoText, setTodoText] = useState<string>("");
  //Función manejadora de evento Key Up
  const handleAddTodo = (e: React.KeyboardEvent) => {
    if(e.key === "Enter" && todoText === "") {
      alert("You have to write a text!")
      return
    }
    if(e.key === "Enter") {
      dispatch(
        addTodo(todoText)
      )
    }
  };

   const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  }

  return (
    <div className="todoList">
      <em>Made with useReducer</em>
      <h1>Emoji Todo List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyUp={handleAddTodo}
        placeholder="Add a new todo"
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={()=>handleRemoveTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { TodoList };
