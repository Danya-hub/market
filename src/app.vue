<template>
    <div id="controlPanel">
        <Panel :products="products" @add="_addProduct"></Panel>
        <Public :products="products" @remove="_remProduct"></Public>
    </div>
</template>

<script>
    import Panel from "@/components/panel.vue";
    import Public from "@/components/public.vue";

    export default {
        components: {
            Panel,
            Public
        },
        data() {
            return {
                products: [],
            }
        },
        methods: {
            _remProduct(prod) {
                this.products = this.products.filter(e => e.id != prod.id);
            },
            _addProduct(product) {
                if (Object.values(product).some(value => String(value) == '')) return;
                this.products.push(product);
            },
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 100 14px 'Nunito', sans-serif;
        border: none;
        background: none;
    }

    button {
        display: block;
        width: 100%;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 10px 20px;
        cursor: pointer;
    }

    img {
        display: block;
        width: 100%;
        height: fit-content;
        object-fit: contain;
        pointer-events: none;
    }

    input {
        display: block;
        width: 100%;
        outline: none;
    }

    input::placeholder {
        color: #999999;
        font-weight: 400;
    }

    textarea {
        display: block;
        width: 100%;
        outline: none;
        resize: none;
    }

    textarea::-webkit-scrollbar {
        display: none;
    }

    select {
        outline: none;
        cursor: pointer;
    }

    span {
        display: block;
        font-weight: 400;
    }

    #controlPanel {
        display: flex;
    }

    .strong {
        font-weight: 400;
    }

    i {
        pointer-events: none;
    }
</style>