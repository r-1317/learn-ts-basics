export {};
import { Todo } from "./types";
import { initTodos } from "./initTodos";

const sortedTodos: Todo[] = [...initTodos].sort((a, b) => {
  if (a.isDone !== b.isDone) {
    return a.isDone ? 1 : -1;
  } else {
    return a.deadline.getTime() - b.deadline.getTime();
  }
});

console.log(JSON.stringify(initTodos, null, 2));
console.log(JSON.stringify(sortedTodos, null, 2));