import { State } from "./Store";

export const doneSelector = (s: State) => s.todos.filter((t) => t.done);
export const unDoneSelector = (s: State) => s.todos.filter((t) => !t.done);
export const deleteSelector = (s: State) => s.todos.filter((t) => t);
