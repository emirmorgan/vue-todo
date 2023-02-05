<script></script>

<template>
  <div class="todo-box">
    <input
      class="todo-input"
      type="text"
      placeholder="I'm gonna finish my homework."
    />
    <button>+</button>
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
  cursor: crosshair;
  width: 100%;
  border: solid 1px #000;
  background-color: transparent;
  padding: 8px;
}
</style>
