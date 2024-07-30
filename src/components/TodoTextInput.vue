<script setup lang="ts">
import {ref} from 'vue' 

const props = defineProps<{
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}>()

const emit = defineEmits<{
  (e: 'onSave', text: string): void
}>()

const text = ref('')

function handleBlur() {
  if (!props.newTodo) {
    emit('onSave', text.value)
  }
}

function handleSubmit() {
  const trimText = text.value.trim()
  emit('onSave', text.value)
  if (props.newTodo) {
    text.value = ''
  }
}
</script>

<template>
  <input
    :class="{edit: editing, 'new-todo': newTodo}"
    type="text"
    :placeholder="placeholder"
    :autofocus="true"
    v-model="text"
    @onblur="handleBlur"
    @keyup.enter="handleSubmit">
</template>

<style scoped>

</style>