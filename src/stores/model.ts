export type Todo = {
  id?: number;
  text: string;
  completed: boolean;
}

export type TodoData = {
  todoList: Todo[]
}