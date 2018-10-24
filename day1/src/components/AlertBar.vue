<template>
    <div class="alert">
        <span class="title">This is alert</span><br>
        <slot name="title"></slot><br>
        <slot name="sub-title"></slot>
    </div>
</template>

<script>
export default {
    name: 'AlertBar'
}
</script>

<style scoped>
    .title {
        font-size: 12px;
        text-decoration: underline;
    }
    .alert{
        color: firebrick;
        border:firebrick 1px solid;
        border-radius: 4px;
        padding: 10px;
    }
    h5 {
        margin: 0;
    }
</style>
