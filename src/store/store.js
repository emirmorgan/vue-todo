import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      todos: [],
    };
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        title: todo,
        completed: false,
      });
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    },
    completeTodo(state, index) {
      if (state.todos[index].completed === true) {
        state.todos[index].completed = false;
      } else {
        state.todos[index].completed = true;
      }
    },
  },
});
