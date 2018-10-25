<template>
  <div id="app">
    <CartBar/>
    <router-view/>
  </div>
</template>

<script>
import CartBar from '@/components/CartBar'

export default {
  name: 'App',
  components: {CartBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  color: #2c3e50;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}
</style>
