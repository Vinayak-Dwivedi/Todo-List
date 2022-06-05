import { ChangeEvent, FC, memo, useState } from "react";
import Button from "./Button";
import { connect, useDispatch } from "react-redux";
import { todoADD_ActionCR, TODO_ADDED } from "./todos";

type TodoFormProps = {
  onClose: any;

  onSubmit: (todoText: string) => void;
};

const TodoForm: FC<TodoFormProps> = ({ onSubmit }, props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const saveTodo = () => {
    onSubmit(inputValue);

    setInputValue("");

    props.onClose();
  };

  return (
    <>
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Create a Todo
        </h3>
        <div className="mt-4 w-80 mb-4">
          <input
            className="border-2 w-60 border-cyan-400"
            value={inputValue}
            onChange={onInputChange}
            placeholder="Your todo text"
          />
        </div>
        <div className="space-x-4 flex flex-row">
          <Button disabled={!inputValue} onClick={saveTodo}>
            Save
          </Button>
          <Button onClick={props.onClose} theme="primary">
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

TodoForm.defaultProps = {};

export default connect(undefined, { onSubmit: todoADD_ActionCR })(
  memo(TodoForm)
);
