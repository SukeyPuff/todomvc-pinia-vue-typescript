<script setup>
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todo";

const store = useTodoStore();

const { todoData } = storeToRefs(store);

const {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted,
} = store;

function onAdd() {
  addTodo({
    text: "study js",
    completed: false,
  });
}

function onDelete(todoItem) {
  deleteTodo(todoItem);
}

function onEdit(todoItem, text) {
  editTodo(todoItem, text);
}

function onComplete(todoItem) {
  completeTodo(todoItem);
}

function onCompleteAll() {
  completeAll();
}

function onClearCompleted() {
  clearCompleted();
}
</script>

<template>
  <ul>
    <li v-for="item in todoData.todoList" :key="item.id">
      {{ item.text }}
      {{ item.completed ? "已完成" : "未完成" }}
      <button @click="onDelete(item)">delete</button>
      <button @click="onEdit(item, 'study css')">edit</button>
      <button @click="onComplete(item)">complete</button>
    </li>
  </ul>
  <div>
    <button @click="onAdd">add todo</button>
    <button @click="onCompleteAll">complete all</button>
    <button @click="onClearCompleted">clear completed</button>
  </div>
</template>

<style scoped></style>
