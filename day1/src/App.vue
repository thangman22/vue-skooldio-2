<template>
  <div id="app">
    <ul>
      <li v-for="todo in todos" :key="todo.time">
        {{todo.text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      todos: [
        {
          text: '<strong>Todo1</strong>',
          time: 1540352507,
          completed: true
        },
        {
          text: 'Todo2',
          time: 1540352529,
          completed: true
        },
        {
          text: 'Todo3',
          time: 1540352535,
          completed: false
        }
      ]
    }
  }
}
</script>

<style>

</style>
