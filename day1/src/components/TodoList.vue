<template>
    <p>
        <ul>
            <li :id="todo.time" v-for="todo in todos" :key="todo.time">
            <span :class="{ 'green' : todo.completed, 'red': !todo.completed }">
                {{todo.text | capitalize}}
            </span>
            </li>
        </ul>
    </p>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        todos: Array
    },
    filters: {
        capitalize (value) {
            return value.toUpperCase()
        }
    },
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
