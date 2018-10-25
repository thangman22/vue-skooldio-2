<template>
    <div class="cart-bar">
       {{totalProduct}} <strong>Products | Total price</strong> {{totalPrice}}
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
