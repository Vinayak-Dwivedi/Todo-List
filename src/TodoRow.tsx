import { FC, memo, useCallback } from "react";

import { TODO } from "./Todo";

type TodoRowProps = {
  todo: TODO;
  onStatusChange: (id: number, done: boolean) => void;
};

const TodoRow: FC<TodoRowProps> = ({ todo, onStatusChange }) => {
  const { id, done, title } = todo;
  const handleChange = useCallback(() => onStatusChange(id, !done), [id, done]);

  return (
    <>
      <div className="flex items-center">
        <input
          checked={done}
          onChange={handleChange}
          type="checkbox"
          className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        />

        <p
          className={
            "mr-3 ml-3 font-medium text-gray-700 text-sm " +
            (done && "line-through")
          }
        >
          {title}
        </p>
        <button className="text-red-700 text-xl p-2 rounded-full border-2 hover:bg-red-500">
          X
        </button>
      </div>
    </>
  );
};

TodoRow.defaultProps = {};

export default memo(TodoRow);
