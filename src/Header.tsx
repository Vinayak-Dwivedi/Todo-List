import { FC, memo } from "react";

type HeaderProps = {
  children: string;
  name?: string;
};

const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <div className="px-32 py-4 shadow flex justify-between">
        <h1>
          <span className="text-xl font-medium text-cyan-700">
            {props.children}
          </span>
          <span className="text-xl ml-2 font-bold text-cyan-500">
            {props.name}
          </span>
        </h1>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);
