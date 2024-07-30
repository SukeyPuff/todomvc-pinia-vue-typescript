<script setup lang="ts">
import {ref} from 'vue'
import type { Todo } from '@/stores/model';
import TodoTextInput from './TodoTextInput.vue';

const props = defineProps<{
  todo: Todo
}>()

const emit = defineEmits<{
  (e: 'editTodo', t: Todo, text: string): void;
  (e: 'deleteTodo', t: Todo): void;
  (e: 'completeTodo', t: Todo): void;
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

function handleDeleteTodo() {
  emit('deleteTodo', props.todo)
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
      <button
        class="destroy"
        @click="handleDeleteTodo">
      </button>
    </div>
  </li>
</template>

<style scoped>

</style>