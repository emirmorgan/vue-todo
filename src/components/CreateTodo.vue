<script>
import store from "../store/store";

export default {
  methods: {
    handleTodo(e) {
      this.todo = e.target.value;

      //Submit to-do
      if (
        e.key === "Enter" &&
        this.todo !== "" &&
        this.todo.match(/^ *$/) === null
      ) {
        e.target.value = ""; //Clear the input

        //Create a todo
        store.commit("addTodo", this.todo);
      }
    },
  },
  data() {
    return {
      todo: "",
    };
  },
};
</script>

<template>
  <div class="todo-box">
    <input
      class="todo-input"
      type="text"
      placeholder="I'm gonna finish my homework."
      @keyup="(e) => handleTodo(e)"
      :value="this.todo"
    />
    <button @click="handleTodo">+</button>
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
