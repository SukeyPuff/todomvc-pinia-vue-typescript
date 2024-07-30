export type Todo = {
  id?: number;
  text: string;
  completed: boolean;
}

export type TodoList = {
  todoList: Todo[]
}