import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneSelector } from "./selector";

type DisplayerProps = {};

const Displayer: FC<DisplayerProps> = (props) => {
  const doneTodo = useSelector(doneSelector);
  console.log(doneTodo);

  return (
    <>
      <h1>{doneTodo}</h1>
    </>
  );
};

Displayer.defaultProps = {};

export default memo(Displayer);
