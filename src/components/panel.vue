<template>
    <aside>
        <Form>
            <Input placeholder="Название" icon="pen" v-model:value="product.name"></Input>
            <Textarea placeholder="Описание" icon="pen" v-model:value.trim="product.descr"></Textarea>
            <Input placeholder="Цена" icon="pen" v-model:value.number="product.price">
            <template v-slot:nav>
                <select id="rate" @change="product.rate = $event.target.value">
                    <option v-for="rate in rates" :key="rate" :value="rate[1]">{{rate[0]}}</option>
                </select>
            </template>
            </Input>
            <div class="percent">
                <Input class="disabled" @input="_setDiscount" v-model:value.number="product.percent"
                    placeholder="Скидка" icon="pen" @parent="_getParent"></Input>
                <SwitchBtn @switch="_setActive"></SwitchBtn>
            </div>
            <File icon="image" @image="(event) => product.image = event"></File>
            <Button @click.prevent="$emit('add', product), product = _setEmptyObj()">Добавить</Button>
        </Form>
    </aside>
</template>

<script>
    import _getRates from "@/data/rate.js";

    const rates = _getRates();
    const maxLengthSign = 2;
    let newId = 0;
    let label = null;

    export default {
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                product: this._setEmptyObj(),
                rates,
            }
        },
        methods: {
            _setEmptyObj() {
                return {
                    id: newId += 1,
                    name: '',
                    descr: '',
                    price: '',
                    image: null,
                    rate: Object.values(rates)[0][1],
                }
            },
            _setActive(value) {
                value ? (label.classList.remove('disabled'), this.product.percent = '', this.product.totalPrice = 0) :
                    (label.classList.add('disabled'), delete this.product.percent, delete this.product.totalPrice);
            },
            _setDiscount(event) {
                let price = Number(this.product.price),
                    percent = Number(event.target.value);
                let rez = Number((price - (price / 100 * percent)).toFixed(maxLengthSign));
                
                this.product.totalPrice = rez > 0 ? rez : 0;
            },
            _getParent(event) {
                label = event;
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

    .disabled {
        opacity: 0.7;
        pointer-events: none;
    }

    .percent {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        background: var(--lightgreen);
    }
</style>