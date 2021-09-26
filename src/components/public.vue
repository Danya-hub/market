<template>
  <main>
    <div class="product" v-for="iteration in products" :key="iteration">
      <h3 class="name">{{iteration.name}}</h3>
      <img src="#" alt="imgProd" class="image">
      <span class="price">{{iteration.price}}$</span>
    </div>
  </main>
</template>

<script>
  export default {
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
    data() {}
  }
</script>

<style scoped>
  main {
    display: flex;
    flex-wrap: wrap;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.3);
    width: 100%;
    padding: 20px;
  }

  main .product {
    max-width: 160px;
    width: 100%;
    margin: 20px;
    overflow: hidden;
  }

  main .product>* {
    display: block;
    margin-top: 10px;
  }

  main .product>*:first-child {
    margin: 0;
  }

  main .product .name {
    font-size: 16px;
    font-weight: 600;
  }

  main .product .image {
    background: rgb(235, 235, 235);
    width: 100%;
    height: 160px;
  }
</style>