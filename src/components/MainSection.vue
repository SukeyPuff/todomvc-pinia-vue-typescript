<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { Todo } from '@/stores/model';

const props = defineProps<{
  todos: Todo[]
}>()

const emit = defineEmits<{
  (e: 'editTodo', t: Todo, text: string): void;
  (e: 'deleteTodo', t: Todo): void;
  (e: 'completeTodo', t: Todo): void;
}>()

</script>

<template>
  <section class="main">
    <ul class="todo-list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @edit-todo="(t: Todo, text: string) => $emit('editTodo', t, text)"
        @delete-todo="(t: Todo) => $emit('deleteTodo', t)"
        @complete-todo="(t: Todo) => $emit('completeTodo', t)"/>
    </ul>
  </section>
</template>

<style scoped>

</style>