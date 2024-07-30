<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo'
import Header from './components/Header.vue'
import MainSection from './components/MainSection.vue'
import type { Todo } from './stores/model';

const todoStore = useTodoStore()
const { todoList } = storeToRefs(todoStore)
const {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
} = todoStore
</script>

<template>
  <div class="todoapp">
    <Header @add-todo="(text: string) => addTodo({text, completed: false})" />
    <MainSection
      :todos="todoList"
      @edit-todo="(t: Todo, text: string) => editTodo(t, text)"
      @delete-todo="(t: Todo) => deleteTodo(t)"
      @complete-todo="(t: Todo) => completeTodo(t)"/>
  </div>
</template>

<style scoped></style>
