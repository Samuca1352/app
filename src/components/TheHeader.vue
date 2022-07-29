<template>
  <div>
    <div>
      {{ fullName }}
    </div>

    <div>
      <input v-model="user.first_name" type="text" name="" id="" />
    </div>
    <br /><br /><br />
    <h1>Todos em aberto</h1>
    <div v-for="todo in uncompleted" :key="todo.id">
      {{ todo.title }}
    </div>
    <h1>Todos completas</h1>
    <div v-for="todo in completed" :key="todo.id">
      {{ todo.title }}
    </div>
    <h1>Todos</h1>
    <div v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" name="" id="" />
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      teste: "teste",

      user: {
        first_name: "Samuel",
        last_name: "Damasceno",
      },
      todos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false,
        },
        {
          userId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: false,
        },
      ],
    };
  },

  methods: {},
  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    },
    uncompleted() {
      return this.todos.filter((todo) => !todo.completed);
    },
    completed() {
      return this.todos.filter((todo) => todo.completed);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
  margin: 60px;
}
</style>