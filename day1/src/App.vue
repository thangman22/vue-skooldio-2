<template>
  <div id="app">
    <TodoList />
    <hr/>
    <SearchBox />
    <hr/>
    <AddForm />
  </div>
</template>

<script>
import TodoList from "./components/TodoList"
import SearchBox from "./components/SearchBox"
import AddForm from "./components/AddForm"

export default {
  name: 'App',
  components: { TodoList, SearchBox, AddForm},
  filters: {
    capitalize (value) {
      return value.toUpperCase()
    }
  },
  mounted () {
    if (localStorage['todos']) {
      this.todos = JSON.parse(localStorage['todos'])
    } else {
      this.todos = []
    }

    // this.$nextTick (()=> {
    //   this.$destroy()
    // })
  },
  watch: {
    todos (current, old) {
      console.log(current)
    }
  },
  computed: {
    sortTodos () {
      let todos = this.todos
      
      return todos.sort((a,b) => {
        return b.time - a.time 
      }).filter(todo => {
        return todo.text.indexOf(this.searchText) !== -1
      })
    }
  },
  methods: {
    save () {
      this.$validator.validateAll().then(result => {
        if(result) {
            let todoObj = {
          text: this.newTodo,
          time: Math.round(Date.now() / 1000),
          completed: false
        }
        this.todos.push(todoObj)
        localStorage['todos'] = JSON.stringify(this.todos)
        this.newTodo = ''
        }
      })
    },
  },
  data () {
    return {
      searchText: '',
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
