<template>
    <div class="product">
        product
    </div>
</template>

<script>

import productList from '@/products.json'

export default {
    name: 'Product',
    data () {
        return {
            products: productList
        }
    }
}
</script>

<style>

</style>
