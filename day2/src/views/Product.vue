<template>
    <div class="product">
        <div v-for="product in products" :key="product.ProductId">
            <img :src="product.ProductPicUrl" width="100"/><br/>
            <strong><router-link :to="{name: 'product_detail',params:{'productId': product.ProductId}}">{{product.Name}}</router-link></strong>
            <p>
                {{product.Description}}<br/>
                <button class="atc-button" @click="addToCart(product)">Add to Cart</button>
            </p>
            <p>
                <strong>{{product.Price}} {{product.CurrencyCode}}</strong>
            </p>
        </div>
    </div>
</template>

<script>

import productList from '@/products.json'

import {mapActions} from 'vuex'

export default {
    name: 'Product',
    data () {
        return {
            products: productList
        }
    },
    methods: {
        ...mapActions([
            'addToCart',
        ])
    },
    mounted() {
        //this.$router.push({name: 'product_detail',params:{'productId': product.ProductId}})
    }
}
</script>

<style scoped>
.atc-button {
    background: seagreen;
    border-radius: 4px;
    border: 0;
    color: #fff;
}
</style>
