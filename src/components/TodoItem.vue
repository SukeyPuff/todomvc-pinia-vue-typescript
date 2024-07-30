<script setup lang="ts">
import {ref} from 'vue'
import type { Todo } from '@/stores/model';
import TodoTextInput from './TodoTextInput.vue';

const props = defineProps<{
  todo: Todo
}>()

const emit = defineEmits<{
  (e: 'editTodo', todoItem: Todo, text: string): void;
  (e: 'deleteTodo', todoItem: Todo): void;
  (e: 'completeTodo', todoItem: Todo): void;
}>()

const editing = ref(false)

function handleDoubleClick() {
  editing.value = true  
}

function handleSave(text: string) {
  if (text.length === 0) {
    emit('deleteTodo', props.todo)
  } else {
    emit('editTodo', props.todo, text)
  }

  editing.value = false
}

function handleCompleteTodo() {
  emit('completeTodo', props.todo)
}
</script>

<template>
  <li :class="{completed: todo.completed, editing}">
    <TodoTextInput
      v-if="editing"
      :text="todo.text"
      :editing="editing"
      @on-save="handleSave"/>
    <div
      v-else
      class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.completed"
        @change="handleCompleteTodo"/>
      <label @dblclick="handleDoubleClick">
        {{ todo.text }}
      </label>
      <button class="destroy"></button>
    </div>
  </li>
</template>

<style scoped>

</style>