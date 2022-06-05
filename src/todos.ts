export const TODOS_STATUS_CHANGE = "todo status change";
export const TODO_ADDED = "todo ADDed";
export const TODO_DELETE = "todo deleted";

export const todoADD_ActionCR = (TodoText: string) => {
  return { type: TODO_ADDED, payload: TodoText };
};
export const todoToggle_ActionCR = (todoID: number, Status: boolean) => {
  return { type: TODOS_STATUS_CHANGE, payload: { id: todoID, done: Status } };
};
