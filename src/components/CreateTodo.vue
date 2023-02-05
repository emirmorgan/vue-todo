<script></script>

<template>
  <div class="todo-box">
    <input
      class="todo-input"
      type="text"
      placeholder="I'm gonna finish my homework."
    />
    <button class="todo-button">+</button>
  </div>
</template>

<style scoped>
.todo-box {
  display: flex;
  width: 100%;
  max-width: 680px;
  border: solid 1px #000;

  padding: 16px;
  gap: 12px;
}

.todo-input {
  width: 100%;
  border: solid 1px #000;
  background-color: transparent;
  padding: 8px;
}

.todo-button {
  cursor: cell;
  background-color: transparent;

  color: black;
  font-size: 16px;
  font-weight: 600;

  border: solid 1px #000;
  padding: 8px 12px;

  transition: all 150ms ease;
}

.todo-button:hover {
  background-color: var(--primary-color);
}
</style>
