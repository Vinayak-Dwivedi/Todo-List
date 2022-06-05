import cn from "classnames";
import { ButtonHTMLAttributes, FC, memo } from "react";

type ButtonProps = {
  theme?: "primary" | "default";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme, ...rest }) => {
  const themeClasses =
    theme === "primary"
      ? "bg-yellow-500 focus:ring-yellow-800 text-white hover:bg-yellow-700"
      : "bg-white focus:ring-gray-400  hover:bg-gray-700";

  return (
    <>
      <div>
        <button
          className={cn(
            " rounded-md font-medium  border-2 hover:ring-2 focus:ring-2 px-6 py-2 inline-flex  ",
            themeClasses
          )}
          {...rest}
        ></button>
      </div>
    </>
  );
};

Button.defaultProps = { theme: "primary" };

export default memo(Button);
