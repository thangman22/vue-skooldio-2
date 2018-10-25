<template>
    <div class="cart-bar">
        <router-link to="/products">Go to Products</router-link> | 
       <router-link to="/cart">{{totalProduct}} <strong>Products | Total price</strong> {{totalPrice}}</router-link>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'CartBar',
    computed: {
        ...mapGetters([
            'totalPrice',
            'totalProduct'
        ])
    }
}
</script>

<style scoped>
    .cart-bar {
        width: 100%;
        height: 40px;
        text-align: right;
        border-bottom: 1px solid #666
    }
</style>
