<template>
    <button @click="onClick('This is mock')">Add Mock Todo</button>
</template>

<script>
export default {
    name: 'AddMockTodo',
    props: {
        onClick: Function
    }
}
</script>

<style>

</style>
