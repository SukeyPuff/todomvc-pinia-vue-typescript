<script setup lang="ts">
import TodoTextInput from './TodoTextInput.vue'

function onSave() {

}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <TodoTextInput
      :on-save="onSave"
      :new-todo="true"
      placeholder="What needs to be done?"/>
  </header>
</template>

<style scoped>

</style>