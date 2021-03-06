import { FC, memo } from "react";
import { connect, useDispatch } from "react-redux";
import { deleteSelector, doneSelector, unDoneSelector } from "./selector";
import { State } from "./Store";
import { TODO } from "./Todo";
import TodoRow from "./TodoRow";
import { TODOS_STATUS_CHANGE, todoToggle_ActionCR, TODO_DELETE } from "./todos";

type TodoListProps = {
  todos: TODO[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();
  const handleStausChange = (id: number, done: boolean) => {
    dispatch({ type: TODOS_STATUS_CHANGE, payload: { id, done } });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: TODO_DELETE, payload: { id } });
  };

  return (
    <div className="space-y-4">
      {todos.map((t) => (
        <TodoRow
          key={t.id}
          todo={t}
          onStatusChange={handleStausChange}
          ondeleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);

const incompleteMapper = (s: State) => {
  return { todos: unDoneSelector(s) };
};

const completeMapper = (s: State) => {
  return { todos: doneSelector(s) };
};
const dispatchMapeer = {
  onStausChange: todoToggle_ActionCR,
};

const deleteMApper = (s: State) => {
  return { todos: deleteSelector(s) };
};

export const IncompleteList = connect(incompleteMapper)(TodoList);
export const CompleteList = connect(completeMapper)(TodoList);
