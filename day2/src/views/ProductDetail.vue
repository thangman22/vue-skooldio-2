<template>
    <div class="product-detail">
        <router-link to="/products">Back to Product List</router-link><br>
        <img :src="product.ProductPicUrl" width="300"/><br/>
        <h2>{{product.Name}}</h2>
        {{product.Description}}<br/>
        <button class="atc-button" @click="$store.dispatch('addToCart',product)">Add to Cart</button>
        <p>
            <h2 class="green">{{product.Price}} {{product.CurrencyCode}}</h2>
        </p>
    </div>
</template>

<script>

import productList from '@/products.json'

import {mapActions,mapMutations} from 'vuex'

export default {
    name: 'ProductDeatail',
    data () {
        return {
            products: productList,
            product: {}
        }
    },
    methods: {

    },
    mounted() {
        this.product = this.products.filter((product) => {
            return product.ProductId === this.$route.params.productId
        })[0]
    }
}
</script>

<style scoped>
.green{
    color: seagreen;
}
.atc-button {
    background: seagreen;
    border-radius: 4px;
    border: 0;
    color: #fff;
}
</style>
