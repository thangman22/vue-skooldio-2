<template>
  <div id="app">
    <h1>{{list.join(',')}}</h1>
    <h1>{{number}}</h1>
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      text: 'Hello Skooldio',
      number: 10,
      list: ['a','b','c']
    }
  }
}
</script>

<style>

</style>
