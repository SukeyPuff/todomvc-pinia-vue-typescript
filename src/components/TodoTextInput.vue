<script setup lang="ts">
const props = defineProps<{
  onSave: (text: string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}>()
</script>

<template>
  <input
    :class="{edit: editing, 'new-todo': newTodo}"
    type="text"
    :placeholder="placeholder"
    :autofocus="true">
</template>

<style scoped>

</style>