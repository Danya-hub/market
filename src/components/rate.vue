<template>
    <select id="rate">
        <option v-for="rate in rates" :key="rate"></option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                rates: {
                    dollar: ['доллар', '$'],
                    euro: ['евро', '€'],
                    ruble: ['рубль', '₽'],
                    hryvnia: ['гривна', '₴']
                }
            }
        },
        methods: {
            _setContent() {
                this.$emit('setValue', this.rate)
            }
        }
    }
</script>