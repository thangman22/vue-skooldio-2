<template>
    <p>
        <ul>
            <li :id="todo.time" v-for="todo in sortTodos" :key="todo.time">
            <span :class="{ 'green' : todo.completed, 'red': !todo.completed }">
                {{todo.text}}
            </span>
            </li>
        </ul>
    </p>
</template>

<script>
export default {
    name: 'TodoList'
}
</script>

<style>

</style>
