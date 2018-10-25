<template>
    <div class="cart">
        <div v-for="product in $store.state.productOncart" :key="product.ProductId">
            <img :src="product.ProductPicUrl" width="100"/><br/>
            <strong><router-link :to="{name: 'product_detail',params:{'productId': product.ProductId}}">{{product.Name}}</router-link></strong>
            <p>
                {{product.Description}}<br/>
            </p>
            <p>
                <strong>{{product.Price}} {{product.CurrencyCode}}</strong>
            </p>
        </div>
        <hr/>
        <h2>Total Price {{$store.state.totalPrice}} USD</h2>
    </div>
</template>

<script>

export default {
    name: 'cart',

}
</script>

<style>

</style>
