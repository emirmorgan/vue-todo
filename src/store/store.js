import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      todos: [
        { title: "Test 1", completed: false },
        { title: "Test 2", completed: false },
        { title: "Test 3", completed: true },
      ],
    };
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push({ title: payload, completed: false });
    },
  },
});
