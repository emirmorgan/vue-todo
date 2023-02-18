<script>
import store from "../store/store";

export default {
  props: ["id", "title", "completed"],
  methods: {
    removeTodo() {
      store.commit("deleteTodo", this.id);
    },
  },
};
</script>

<template>
  <div class="todo-box" :style="completed ? 'opacity: 50%' : 'opacity: 100%'">
    <p :class="completed ? 'todo-text text-done' : 'todo-text'">{{ title }}</p>
    <button>✓</button>
    <button @click="removeTodo">✗</button>
  </div>
</template>

<style scoped>
.todo-box {
  cursor: crosshair;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 680px;
  border: solid 1px var(--border-color);

  padding: 16px;
  gap: 12px;

  transition: all 300ms ease;
}

.todo-box:hover {
  border: solid 1px #000;
  box-shadow: 6px 6px 0px var(--primary-color);
}

.todo-text {
  width: 100%;

  word-break: break-all;
}

.text-done {
  text-decoration: line-through;
}
</style>
