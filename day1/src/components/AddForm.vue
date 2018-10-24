<template>
    <form @submit.prevent="save">
        <input type="text" v-validate="'required'" v-model="newTodo" name="new-todo"><br>
        <button type="submit">Save</button>
    </form>
</template>

<script>
export default {
    name: 'AddForm'
}
</script>

<style>

</style>
