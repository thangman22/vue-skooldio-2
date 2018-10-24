<template>
    <p>
        Search <br><input type="text" v-model="searchText">
    </p>
</template>

<script>
export default {
    name: 'SearchBox',
    data () {
        return {
            searchText: ''
        }
    },
    watch: {
        searchText(val) {
            this.$emit('onSearchTextChange',val)
        }
    },
}
</script>

<style>

</style>
