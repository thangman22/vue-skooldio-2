<template>
  <div>
    
  </div>
</template>

<script>
export default {
  async mounted() {
    let res = await fetch(`https://blog.skooldio.com/wp-json/wp/v2/posts/392?_embed`)
    let result = await res.json()
    console.log(result)
  }

}
</script>

<style>

</style>
