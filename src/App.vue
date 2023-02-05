<script setup>
import CreateTodo from "./components/CreateTodo.vue";
</script>

<template>
  <h2 class="todo-text" style="margin-bottom: 24px">Vue To-Do App</h2>
  <CreateTodo />
</template>

<style scoped>
.todo-text {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;

  -webkit-text-stroke: #000;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
}
</style>
