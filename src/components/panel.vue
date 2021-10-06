<template>
    <aside>
        <form action="">
            <label class="input">
                <i class="fas fa-pen"></i>
                <input type="text" class="panel" v-model.lazy="product.name" placeholder="Название" required>
            </label>
            <label class="textarea">
                <i class="fas fa-pen"></i>
                <textarea class="panel" v-model.lazy="product.descr" placeholder="Описание" required></textarea>
            </label>
            <label class="input">
                <i class="fas fa-pen"></i>
                <input type="text" class="panel" v-model.number.lazy="product.price" placeholder="Цена" required>
                <select id="rate" @change="product.rate = $event.target.value">
                    <option v-for="rate in rates" :key="rate" :value="rate[1]">{{rate[0]}}</option>
                </select>
            </label>
            <div class="discount">
                <label ref="discount" class="input disabled">
                    <i class="fas fa-pen"></i>
                    <input type="text" class="panel" @input="_setDiscount" v-model.number.lazy="product.discount"
                        placeholder="Скидка">
                </label>
                <SwitchBtn @switch="_setActive"></SwitchBtn>
            </div>
            <label class="file">
                <i class="far fa-image"></i>
                <span class="panel">Выбрать файл</span>
                <input type="file" id="file" @click="click">
            </label>
            <button @click.prevent="_addProduct" class="add">Добавить</button>
        </form>
    </aside>
</template>

<script>
    import SwitchBtn from "@/UI/switchButton.vue";
    import Input from "@/UI/input.vue";
    import _getRates from "@/data/rate.js";

    const _rates = _getRates();
    let maxLengthSign = 2;
    let newId = 0;

    export default {
        components: {
            SwitchBtn,
            Input,
        },
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
                if (Object.values(this.product).some(value => value == '')) return;
                this.products.push(this.product),
                    this.product = this._setEmptyObj();
            },
            _setActive(bool) {
                let input = this.$refs.discount;
                bool ? (input.classList.remove('disabled'), this.product.discount = '', this.product.totalPrice = 0) : 
                    (input.classList.add('disabled'), delete this.product.discount, delete this.product.totalPrice);
            },
            _setDiscount(event) {
                let price = Number(this.product.price),
                    discount = Number(event.target.value);
                    
                this.product.totalPrice = Number((price - (price / 100 * discount)).toFixed(maxLengthSign));
            }
        }
    }
</script>

<style scoped>
    aside {
        background: var(--lightblack);
        padding: 40px 20px;
        min-height: 100vh;
        max-width: 320px;
        width: 100%;
        overflow-y: scroll;
    }

    aside::-webkit-scrollbar {
        width: 10px;
    }

    aside::-webkit-scrollbar-thumb {
        background: var(--black);
    }

    .input,
    .textarea {
        background: var(--white);
        color: rgb(100, 100, 100);
    }

    *::placeholder {
        letter-spacing: 1px;
        font-weight: 400;
        color: #777;
    }

    form>* {
        margin-bottom: 14px;
    }

    i {
        pointer-events: none;
    }

    label,
    .input {
        display: flex;
        padding-left: 16px;
    }

    label {
        transition: var(--transDuration) background, var(--transDuration) opacity;
    }

    span {
        align-self: center;
        width: 100%;
    }

    input[type="text"],
    textarea,
    span {
        padding: 0 10px;
    }

    .disabled {
        opacity: 0.7;
        pointer-events: none;
    }

    input[type="file"] {
        display: none;
    }

    .input i {
        padding: 14px 0;
    }

    .input {
        border-radius: var(--borderRadius);
    }

    .textarea {
        padding-top: 10px;
        border-radius: 20px;
    }

    .file {
        border: 1px solid;
        color: var(--white);
        border-radius: var(--borderRadius);
        cursor: pointer;
    }

    .file i {
        align-self: center;
        padding: 14px 0;
    }

    textarea {
        height: 100px;
    }

    .discount {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .add {
        color: var(--white);
        background: var(--lightgreen);
        padding: 14px;
    }
</style>