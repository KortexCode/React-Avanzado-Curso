import React, { useState } from "react";
import { useTodoListState } from "../../hooks/useTodoListInitialState";
import "./main.css"

function TodoList() {
  //Se extrae el estado y las funciones manejadoras desde el Hook
  const { state, handleAddTodo, handleRemoveTodo } = useTodoListState();
  const [todoText, setTodoText] = useState<string>("");
  //Función manejadora de evento Key Up
  const onEventKeyUp = (e: React.KeyboardEvent) => {
    if(e.key === "Enter" && todoText === "") {
      alert("You have to write a text!")
      return
    }
    if(e.key === "Enter") {
      handleAddTodo(todoText)
    }
  };

  return (
    <div className="todoList">
      <em>Made with useReducer</em>
      <h1>Emoji Todo List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyUp={onEventKeyUp}
        placeholder="Add a new todo"
      />
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id} onClick={()=>handleRemoveTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { TodoList };
