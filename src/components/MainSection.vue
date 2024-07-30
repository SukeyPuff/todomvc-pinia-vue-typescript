<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { Todo } from '@/stores/model';

const props = defineProps<{
  todos: Todo[]
}>()

const emit = defineEmits<{
  (e: 'editTodo', todoItem: Todo, text: string): void;
  (e: 'deleteTodo', todoItem: Todo): void;
  (e: 'completeTodo', todoItem: Todo): void;
}>()

</script>

<template>
  <section class="main">
    <ul class="todo-list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @edit-todo="(todoItem, text) => $emit('editTodo', todoItem, text)"
        @delete-todo="(todoItem: Todo) => $emit('deleteTodo', todoItem)"
        @complete-todo="(todoItem: Todo) => $emit('completeTodo', todoItem)"/>
    </ul>
  </section>
</template>

<style scoped>

</style>