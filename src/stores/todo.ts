import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import type { Todo, TodoData } from './model'

export const useTodoStore = defineStore('todo', () => {
  const todoData: TodoData = reactive({
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

  function editTodo(todoItem: Todo, text: string) {
    todoList.value = todoList.value.map(todo => 
      todo.id === todoItem.id ? {...todoItem, text} : todo
    )
  }

  function completeTodo(todoItem: Todo) {
    todoList.value = todoList.value.map(todo => 
      todo.id === todoItem.id ? {...todo, completed: !todo.completed} : todo
    )
  }

  function completeAll() {
    const areAllMarked: boolean = todoList.value.every(todo => todo.completed)

    todoList.value = todoList.value.map(todo => ({
      ...todo,
      completed: !areAllMarked
    }))
  }

  function clearCompleted() {
    todoList.value = todoList.value.filter(todo =>
      todo.completed === false   
    )
  }

  return {
    todoList,
    addTodo,
    deleteTodo,
    editTodo,
    completeTodo,
    completeAll,
    clearCompleted
  }
})

