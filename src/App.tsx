import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList, { CompleteList, IncompleteList } from "./TodoList";
import TodoPage from "./TodoPage";

function App() {
  return (
    <div className=" p-5">
      <TodoPage />
    </div>
  );
}

export default App;
