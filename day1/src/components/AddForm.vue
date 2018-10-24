<template>
    <form @submit.prevent="save" id="add-form">
        <input type="text" v-validate="'required'" v-model="newTodo" name="new-todo"><br>
        <button type="submit">Save</button>
    </form>
</template>

<script>
export default {
    name: 'AddForm',
    data () {
        return {
            newTodo: ''
        }
    },
    methods: {
        save () {
            this.$validator.validateAll().then(result => {
                this.$emit('onSave',this.newTodo)
                this.newTodo = ''
            })
        }
    }
}
</script>

<style>

</style>
