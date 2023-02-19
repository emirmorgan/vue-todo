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
    <TodoItem
      v-if="todo.completed === false"
      :title="todo.title"
      :completed="todo.completed"
      :id="index"
    />
  </div>
  <div class="todo-completed" style="margin-top: 16px">
    <details style="width: 100%">
      <summary style="user-select: none">
        Completed Tasks
        <span class="count-badge">{{
          todos.filter((todo) => todo.completed === true).length
        }}</span>
      </summary>
      <div class="todo-list" v-for="(todo, index) in todos" :key="index">
        <TodoItem
          v-if="todo.completed === true"
          :title="todo.title"
          :completed="todo.completed"
          :id="index"
        />
      </div>
    </details>
  </div>
</template>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
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
.todo-completed {
  max-width: 680px;
  width: 100%;
  display: flex;
}
.count-badge {
  cursor: default;

  margin-left: 4px;
  padding: 3px 8px;
  border: solid 1px #000;
  border-radius: 4px;

  background-color: var(--primary-color);
}
</style>
