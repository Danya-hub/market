<template>
    <div id="controlPanel">
        <Panel :products="products"></Panel>
        <Public :products="products" @remove="remove"></Public>
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
            remove(prod) {
                console.log(prod);
                // this.products = this.products.filter(e => e.id != prod.id);
            }
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