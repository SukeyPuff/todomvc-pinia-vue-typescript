import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import type { Todo, TodoList } from './model'

export const useTodoStore = defineStore('todo', () => {
  const todoData: TodoList = reactive({
    todoList: [{
      id: 0,
      text: 'Go for your dream',
      completed: false
    }]
  })

  const { todoList } = toRefs(todoData)

  function addTodo({text, completed}: Todo) {
    todoList.value.unshift({
      id: todoList.value.reduce(
        (maxId, todo) => Math.max(todo.id!, maxId),
        -1
      ) + 1,
      text,
      completed
    })
  }

  function deleteTodo(todoItem: Todo) {
    todoList.value = todoList.value.filter(
      (todo) => todo.id !== todoItem.id
    )
  }

  return {
    todoList,
    addTodo,
    deleteTodo
  }
})

