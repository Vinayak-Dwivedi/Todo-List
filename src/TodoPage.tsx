import { FC, Key, memo, useState } from "react";
import TodoForm from "./TodoForm";
import Button from "./Button";
import TodoRow from "./TodoRow";
import Header from "./Header";
import { CompleteList, IncompleteList } from "./TodoList";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = (props) => {
  const [todoFormVisible, setTodoFormVisiblity] = useState(false);

  const showTodoForm = () => setTodoFormVisiblity(true);

  const hideTodoForm = () => setTodoFormVisiblity(false);

  return (
    <>
      <div className="px-10 space-y-2">
        <Header name="Vinayak Dwivedi"> TODO LIST BY </Header>
        <div>
          <h1 className="font-bold text-xl text-cyan-700 p-5">Things Todo</h1>
          <IncompleteList />

          {!todoFormVisible && (
            <Button onClick={showTodoForm}>Add a todo</Button>
          )}

          {todoFormVisible && <TodoForm onClose={hideTodoForm} />}
          <h1 className="font-bold text-xl text-cyan-700 p-5">Things done</h1>
          <CompleteList />
        </div>
      </div>
    </>
  );
};

TodoPage.defaultProps = {};

export default memo(TodoPage);
