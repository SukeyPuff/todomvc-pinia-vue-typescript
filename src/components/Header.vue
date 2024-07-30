<script setup lang="ts">
import TodoTextInput from './TodoTextInput.vue'

const emit = defineEmits<{
  (e: 'addTodo', text: string): void
}>()

function onSave(text: string) {
  emit('addTodo', text)
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <TodoTextInput
      @on-save="onSave"
      :new-todo="true"
      placeholder="What needs to be done?"/>
  </header>
</template>

<style scoped>

</style>