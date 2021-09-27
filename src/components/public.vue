<template>
  <main>
    <div class="product" v-for="iteration in products" :key="iteration">
      <button class="remove" @click="$emit('remove', iteration)">
        <i class="far fa-trash-alt"></i>
      </button>
      <div class="content">
        <h3 class="name">{{iteration.name}}</h3>
        <img src="#" alt="imgProd" class="image">
        <span class="price">{{iteration.price + iteration.rate}}</span>
      </div>
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

  .product {
    position: relative;
    display: inline-block;
    max-width: 160px;
    width: 100%;
    margin: 20px;
  }

  .product .content {
    overflow-wrap: break-word;
  }

  .product .content>* {
    display: block;
    margin-top: 10px;
  }

  .product .content>*:first-child {
    margin: 0;
  }

  .product .name {
    font-size: 16px;
    font-weight: 600;
  }

  .product .image {
    background: rgb(235, 235, 235);
    width: 100%;
    height: 160px;
  }

  .remove {
    position: absolute;
    width: 30px;
    height: 30px;
    padding: 0;
    right: 0;
    top: 0;
    transition: .2s color;
    color: rgb(148, 148, 148);
  }

  .remove:hover {
    color: rgb(236, 47, 47);
  }
</style>