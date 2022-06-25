import { useState } from "react";
import { createStore, Reducer } from "redux";

import { TODO } from "./Todo";
import { TODOS_STATUS_CHANGE, TODO_ADDED, TODO_DELETE } from "./todos";

export type State = {
  todos: TODO[];
};
let nextId = 1;
const savetodos = localStorage.getItem("todos");
const initialState: State = {
  todos: savetodos ? JSON.parse(savetodos) : [],
};

export const reducer: Reducer<State> = (State = initialState, action) => {
  switch (action.type) {
    case TODO_ADDED: {
      const todoText = action.payload;
      const todo: TODO = { id: nextId, title: todoText, done: false };
      nextId++;
      return { ...State, todos: [...State.todos, todo] };
    }
    case TODOS_STATUS_CHANGE: {
      const { id, done } = action.payload;
      const newTodos = State.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done };
        }
        return t;
      });

      return { ...State, todos: newTodos };
    }
    case TODO_DELETE: {
      const { id } = action.payload;
      const newtodos = State.todos.filter((t) => t.id !== id);
      return { ...State, todos: newtodos };
    }

    default: {
      return State;
    }
  }
};

const Store = createStore(reducer);
export default Store;
