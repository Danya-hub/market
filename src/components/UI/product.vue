<template>
    <div class="product" v-for="iteration in products" :key="iteration">
        <button class="remove" @click="$emit('remove', iteration)">
            <i class="far fa-trash-alt"></i>
        </button>
        <div class="content">
            <h3 class="name">{{iteration.name}}</h3>
            <div class="image">
                <span v-if="iteration?.percent" class="percent" ref="discount">{{iteration.percent}}%</span>
                <img :src="iteration.image.src" alt="imgProd">
            </div>
            <div class="total">
                <span class="price"
                    :class="{ oldPrice : iteration?.percent }">{{ iteration.price }}{{ iteration.rate }}</span>
                <span v-if="iteration?.percent" class="newPrice"> {{ iteration.totalPrice }}{{ iteration.rate }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        props: {
            products: {
                type: Array,
                required: true,
            },
        },
        methods: {
            _setImage(event) {
                console.log(event);
            }
        }
    }
</script>

<style scoped>
    .product {
        position: relative;
        display: inline-grid;
        max-width: 160px;
        width: 100%;
        margin: 20px;
    }

    .content {
        overflow-wrap: break-word;
    }

    .content>* {
        display: block;
        margin-top: 10px;
    }

    .content>*:first-child {
        margin: 0;
    }

    .name {
        font-size: 16px;
        font-weight: 600;
    }

    .image {
        position: relative;
        background: rgb(235, 235, 235);
        height: 160px;
    }

    .percent {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--red);
        border-radius: var(--borderRadius);
        color: var(--white);
        right: 10px;
        top: 10px;
        width: var(--sizeDiscount);
        height: var(--sizeDiscount);
        font-weight: 600;
    }

    .remove {
        position: absolute;
        width: 30px;
        height: 30px;
        padding: 0;
        right: 0;
        top: 0;
        transition: var(--transDuration) color;
        color: rgb(148, 148, 148);
    }

    .remove:hover {
        color: var(--red);
    }

    .oldPrice {
        text-decoration: line-through;
    }

    .newPrice {
        color: var(--red);
        font-weight: 600;
    }
</style>