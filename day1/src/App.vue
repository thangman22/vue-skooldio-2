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
      <input type="text" v-model="newTodo"> 
      <button @click="save">Save</button>

      <button @click="addObj">Add obj</button>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  filters: {
    capitalize (value) {
      return value.toUpperCase()
    }
  },
  methods: {
    addObj () {
      //this.socialNetWork.facebook = 'skooldio'
      this.$set(this.socialNetWork,'facebook','skooldio')
    },
    save () {
      let todoObj = {
        text: this.newTodo,
        time: Math.round(Date.now() / 1000),
        completed: false
      }
      this.todos.push(todoObj)
    }
  },
  data () {
    return {
      socialNetWork: {
      },
      colorOfText: 'red',
      newTodo: '',
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
