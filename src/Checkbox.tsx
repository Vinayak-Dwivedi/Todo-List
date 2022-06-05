import { FC, InputHTMLAttributes, memo } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <>
      <input
        checked={props.checked}
        onChange={props.onChange}
        type="checkbox"
        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
      />
    </>
  );
};

Checkbox.defaultProps = {};

export default memo(Checkbox);
