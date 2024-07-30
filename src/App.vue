<script setup lang="ts">
import Header from './components/Header.vue'
import { storeToRefs } from 'pinia';
import {useTodoStore} from '@/stores/todo'

const todoStore = useTodoStore()

const {todoList} = storeToRefs(todoStore)
const {
  addTodo,
  deleteTodo
} = todoStore

function handleAddTodo(text: string) {
  addTodo({text, completed: false})
  console.log(todoList.value);
  
}
</script>

<template>
  <div class="todoapp">
    <Header @add-todo="handleAddTodo" />
  </div>
</template>

<style scoped>
</style>
