import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction<string>("todo/add");
export const removeTodo = createAction<string>("todo/remove");