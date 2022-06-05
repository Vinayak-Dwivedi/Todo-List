import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADDED } from "./actions";
import Button from "./Button";

type AddUpdateProps = {};

const AddUpdate: FC<AddUpdateProps> = (props) => {
  const dispatch = useDispatch();
  const updateADD = () => {
    dispatch({ type: TODO_ADDED });
  };
  return (
    <>
      <div>
        <Button onClick={updateADD}>Add to</Button>
      </div>
    </>
  );
};

AddUpdate.defaultProps = {};

export default memo(AddUpdate);
