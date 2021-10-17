<template>
  <main>
    <Product :products="products" @remove="$emit('remove', iteration)"></Product>
  </main>
</template>

<script>
  export default {
    props: {
      products: {
        type: Array,
        required: true,
      },
    }
  }
</script>

<style scoped>
  main {
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
    padding: 10px 20px;
    overflow-y: scroll;
  }
</style>