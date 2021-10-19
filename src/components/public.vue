<template>
  <main>
    <Product :products="products" @remove="(prod) => { $emit('remove', prod) }"></Product>
    <div class="empty" v-show="!products.length">
      <div class="wrapper">
        <img src="@/assets/svg/emptyBasket.svg" alt="basket">
        <span>Ничего нет. Добавьте продукт</span>
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
    },
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

  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 100%;
  }

  .wrapper {
    width: 130px;
    text-align: center;
  }

  .wrapper span {
    padding-top: 10px;
    color: var(--darkgrey);
  }
</style>