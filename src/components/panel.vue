<template>
    <aside id="panel">
        <form action="" @submit.prevent>
            <label class="input" key="name">
                <i class="fas fa-pen"></i>
                <input type="text" v-model.lazy="product.name" placeholder="Название" required>
            </label>
            <label class="input" key="descr">
                <i class="fas fa-pen"></i>
                <input type="text" v-model.lazy="product.descr" placeholder="Описание" required>
            </label>
            <label class="input" key="price">
                <i class="fas fa-pen"></i>
                <input type="text" v-model.number.lazy="product.price" placeholder="Цена" required>
            </label>
            <label for="file" key="image">
                <i class="far fa-image"></i>
                <span>Выбрать файл</span>
            </label>
            <input type="file" id="file" @click="click">
            <button @click="addProduct">Добавить</button>
        </form>
    </aside>
</template>

<script>
    import Rates from "@/components/rate.vue";
    export default {
        props: {
            products: {
                type: Array,
                required: true,
            }
        },
        data() {
            return {
                product: this.emptyObj(),
            }
        },
        methods: {
            emptyObj() {
                return {
                    name: '',
                    descr: '',
                    price: '',
                }
            },
            addProduct() {
                if (Object.values(this.product).some(value => value == '')) return;
                this.products.push(this.product),
                    this.product = this.emptyObj();
            }
        }
    }
</script>

<style scoped>
    span {
        display: block;
    }

    #panel {
        background: #333;
        padding: 40px 20px;
        min-height: 100vh;
        max-width: 320px;
        width: 100%;
        overflow-y: scroll;
    }

    #panel::-webkit-scrollbar {
        width: 10px;
    }

    #panel::-webkit-scrollbar-thumb {
        background: #000;
    }

    #panel form .input>* {
        letter-spacing: 1px;
        color: #858585;
    }

    #panel form .input {
        background: #fff;
    }

    #panel form i {
        padding: 5px 8px 5px 20px;
        border-right: 1px solid;
        pointer-events: none;
    }

    #panel form input,
    #panel form span {
        padding: 10px;
    }

    #panel form label {
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 30px;
        box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255);
        color: #fff;
        margin-bottom: 22px;
        cursor: pointer;
    }

    #panel form button {
        color: #fff;
        background: #7FE366;
        padding: 14px;
    }

    #panel input[type="text"] {
        font-weight: 400;
        color: #333;
    }

    #panel input[type="file"] {
        display: none;
    }
</style>