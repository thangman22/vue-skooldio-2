<template>
  <div id="app">
    <AlertBar>
      <template slot="title">
        This is todo
      </template>
      <template slot="sub-title">
        This is my todo for everyday
      </template>
    </AlertBar>
    <TodoList :todos="sortTodos"/>
    <hr/>
    <SearchBox @onSearchTextChange="changeSearchText"/>
    <hr/>
    <AddForm @onSave="saveData"/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList"
import SearchBox from "./components/SearchBox"
import AddForm from "./components/AddForm"
import AddMockTodo from "./components/AddMockTodo"
import AlertBar from "./components/AlertBar"
import ConsoleMixin from "./mixins/ConsoleMixin"

export default {
  name: 'App',
  components: { TodoList, SearchBox, AddForm, AddMockTodo, AlertBar },
  mixins: [ConsoleMixin],
  mounted () {
    if (localStorage['todos']) {
      this.todos = JSON.parse(localStorage['todos'])
    }
    
    this.consoleOne()
  },
  directives: {
    border: {
      inserted (el) {
        el.style.border = '1px solid #000'
      }
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
    changeSearchText (text) {
      this.searchText = text
    },
    saveData (newTodo) {
      let todoObj = {
        text: newTodo,
        time: Math.round(Date.now() / 1000),
        completed: false
      }
      this.todos.push(todoObj)
      localStorage['todos'] = JSON.stringify(this.todos)
      this.newTodo = ''
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


