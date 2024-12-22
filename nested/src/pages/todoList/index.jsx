function TodoList() {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <em>Made with useReducer</em>
      <h1>Emoji Todo List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new todo"
      />
      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { TodoList };
