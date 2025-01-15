import React, { useState } from "react";
import { useTodoStore } from "../../store/useTodoStore";
import "./main.css"

/*
  otra forma de extraer elementos del estado:
  const todos = useTodoStore((state) => state.todos);
*/

function TodoList() {
  //Extraemos el estado con el hook useTodoStore donde configuramos a zustand
  const {todos, addTodo, removeTodo} = useTodoStore();

  //Estado local para manejar los textos del input
  const [todoText, setTodoText] = useState<string>("");

  //Función manejadora de evento Key Up
  const handleAddTodo = (e: React.KeyboardEvent) => {
    if(e.key === "Enter" && todoText === "") {
      alert("You have to write a text!")
      return
    }
    if(e.key === "Enter") {
      addTodo(todoText)
    }
  };

  //Función manejadora para remover todos con click
  const handleRemoveTodo = (id: string) => {
    removeTodo(id);
  }

  return (
    <div className="todoList">
      <em>Made with Zustand</em>
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
