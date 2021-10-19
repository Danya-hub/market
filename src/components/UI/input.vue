<template>
    <label class="input" ref="label">
        <i class="fas" :class="`fa-${icon}`"></i>
        <input type="text" class="panel" ref="input" @input="update">
        <slot name="nav"></slot>
    </label>
</template>

<script>
    export default {
        name: 'Input',
        props: {
            placeholder: {type: String, required: true},
            icon: {type: String, required: true},
            value: {type: [String, Number]}
        },
        mounted() {
            this.$refs.input.placeholder = this.placeholder;
            this.$emit('parent', this.$refs.label);
        },
        methods: {
            update(event) {
                this.$emit('update:value', event.target.value);
            }
        }
    }
</script>

<style scoped>
    label {
        display: flex;
        background: var(--white);
        color: rgb(100, 100, 100);
        border-radius: var(--borderRadius);
        transition: var(--transDuration) background, var(--transDuration) opacity;
        padding-left: 16px;
    }

    i {
        padding: 14px 0;
    }

    input {
        padding: 0 10px;
        font-weight: 400;
    }

    ::placeholder {
        color: var(--darkgrey);
    }
</style>