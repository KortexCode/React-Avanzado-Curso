import React, {StrictMode} from "react";
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import {TodoList} from './components/todoList'
import { store } from "./store"
import './index.css';

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
     <StrictMode>
        <Provider store={store}>
          <TodoList />
        </Provider>
     </StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

