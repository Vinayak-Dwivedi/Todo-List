import { FC, memo, useCallback } from "react";
import { FiDelete } from "react-icons/fi";
import { TODO } from "./Todo";

type TodoRowProps = {
  todo: TODO;
  ondeleteTodo: (id: number) => void;
  onStatusChange: (id: number, done: boolean) => void;
};

const TodoRow: FC<TodoRowProps> = ({ todo, onStatusChange, ondeleteTodo }) => {
  const { id, done, title } = todo;
  const handleChange = useCallback(() => onStatusChange(id, !done), [id, done]);
  const Delete = useCallback(() => ondeleteTodo(id), [id]);

  return (
    <>
      <div className="flex items-center mb-4">
        <input
          checked={done}
          onChange={handleChange}
          type="checkbox"
          className="w-4 h-4 cursor-pointer text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        />

        <p
          className={
            "mr-3 ml-3 font-medium text-gray-700 text-sm " +
            (done && "line-through")
          }
        >
          {title}
        </p>
        <button
          onClick={Delete}
          className="text-red-700  p-2   hover:bg-red-300"
        >
          <FiDelete />
        </button>
      </div>
    </>
  );
};

TodoRow.defaultProps = {};

export default memo(TodoRow);
