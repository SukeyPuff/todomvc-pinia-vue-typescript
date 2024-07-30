<script setup lang="ts">
import {ref, onMounted} from 'vue' 

const props = defineProps<{
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}>()

const emit = defineEmits<{
  (e: 'onSave', text: string): void,
}>()

const text = ref('')
onMounted(() => {
  text.value = props.text || ''
})

function handleBlur() {  
  if (!props.newTodo) {    
    emit('onSave', text.value)
  }
}

function handleSubmit() {
  const trimText = text.value.trim()
  emit('onSave', trimText)
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
    @blur="handleBlur"
    @keyup.enter="handleSubmit">
</template>

<style scoped>

</style>