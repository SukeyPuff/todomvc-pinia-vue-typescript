import { reactive } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", () => {
  const todoData = reactive({
    todoList: [
      {
        text: "Go for your dream",
        completed: false,
        id: 0,
      },
    ],
  });

  function addTodo({ text, completed }) {
    todoData.todoList.unshift({
      id:
        todoData.todoList.reduce(
          (maxId, todo) => Math.max(todo.id, maxId),
          -1
        ) + 1,
      completed,
      text,
    });
  }

  function deleteTodo(todoItem) {
    todoData.todoList = todoData.todoList.filter(
      (todo) => todo.id !== todoItem.id
    );
  }

  function editTodo(todoItem, text) {
    todoData.todoList = todoData.todoList.map((todo) =>
      todo.id === todoItem.id ? { ...todoItem, text } : todo
    );
  }

  function completeTodo(todoItem) {
    todoData.todoList = todoData.todoList.map((todo) =>
      todo.id === todoItem.id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  function completeAll() {
    const areAllMarked = todoData.todoList.every((todo) => todo.completed);

    todoData.todoList = todoData.todoList.map((todo) => ({
      ...todo,
      completed: !areAllMarked,
    }));
  }

  function clearCompleted() {
    todoData.todoList = todoData.todoList.filter(
      (todo) => todo.completed === false
    );
  }

  return {
    todoData,
    addTodo,
    deleteTodo,
    editTodo,
    completeTodo,
    completeAll,
    clearCompleted,
  };
});
