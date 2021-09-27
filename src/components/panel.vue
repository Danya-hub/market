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
                <select id="rate" @change="product.rate = $event.target.value">
                    <option v-for="rate in rates" :key="rate" :value="rate[1]">{{rate[0]}}</option>
                </select>
            </label>
            <label for="file" key="image">
                <i class="far fa-image"></i>
                <span>Выбрать файл</span>
            </label>
            <input type="file" id="file" @click="click">
            <button @click="_addProduct">Добавить</button>
        </form>
    </aside>
</template>

<script>
    import _getRates from "@/data/rate.js";
    const _rates = _getRates();
    let newId = 0;

    export default {
        props: {
            products: {
                type: Array,
                required: true,
            }
        },
        data() {
            return {
                product: this._setEmptyObj(),
                rates: _rates,
            }
        },
        methods: {
            _setEmptyObj() {
                return {
                    id: newId += 1,
                    name: '',
                    descr: '',
                    price: '',
                    rate: Object.values(_rates)[0][1],
                }
            },
            _addProduct() {
                // if (Object.values(this.product).some(value => value == '')) return;
                this.products.push(this.product),
                    this.product = this._setEmptyObj();
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

    form .input>* {
        letter-spacing: 1px;
        color: #858585;
    }

    form .input {
        background: #fff;
    }

    form i {
        padding: 5px 8px 5px 20px;
        border-right: 1px solid;
        pointer-events: none;
    }

    form input,
    form span {
        padding: 10px;
    }

    form label {
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 30px;
        box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255);
        color: #fff;
        margin-bottom: 22px;
        cursor: pointer;
    }

    form button {
        color: #fff;
        background: #7FE366;
        padding: 14px;
    }

    input[type="text"] {
        font-weight: 400;
        color: #333;
    }

    input[type="file"] {
        display: none;
    }
</style>