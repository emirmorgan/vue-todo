<script setup>
import { ref } from "vue";

//Components
import CreateTodo from "./components/CreateTodo.vue";
import TodoItem from "./components/TodoItem.vue";

import store from "./store/store";

const todos = store.state.todos;
</script>

<template>
  <h2 class="todo-text" style="margin-bottom: 24px">Vue To-Do App</h2>
  <CreateTodo />
  <div class="todo-list" v-for="(todo, index) in todos" :key="index">
    <TodoItem :title="todo.title" :completed="todo.completed" :id="index" />
  </div>
</template>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  gap: 12px;
  margin-top: 24px;
}
.todo-text {
  cursor: crosshair;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;

  -webkit-text-stroke: #000;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
}
</style>
