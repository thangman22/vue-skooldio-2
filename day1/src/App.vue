<template>
  <div id="app">
    <ul>
      <li :id="todo.time" v-for="todo in todos" :key="todo.time">
        <span :class="{ 'green' : todo.completed, 'red': !todo.completed }">
          {{todo.text | capitalize}}
        </span>
        <!-- <span :style="{ 'color' : colorOfText }">
          {{todo.text | capitalize}}
        </span> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  filters: {
    // addText (value) {
    //   return value + ' 1'
    // },
    capitalize (value) {
      return value.toUpperCase()
    }
  },
  data () {
    return {
      colorOfText: 'red',
      todos: [
        {
          text: 'todo1',
          time: 1540352507,
          completed: true
        },
        {
          text: 'todo2',
          time: 1540352529,
          completed: true
        },
        {
          text: 'todo3',
          time: 1540352535,
          completed: false
        }
      ]
    }
  }
}
</script>

<style scoped>
  .red {
    color:orangered;
  }
  .green {
    color: darkgreen;
  }
</style>
