<template>
    <label>
        <i class="fas" :class="`fa-${icon}`"></i>
        <textarea ref="textarea" placeholder="Описание" @input="update" required></textarea>
    </label>
</template>

<script>
    export default {
        name: 'Textarea',
        props: {
            placeholder: {type: String, required: true},
            icon: {type: String, required: true},
        },
        mounted() {
            this.$refs.textarea.placeholder = this.placeholder;
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
        border-radius: calc(var(--heightTextarea) * 0.2);
        color: rgb(100, 100, 100);
        padding: 14px 14px 0;
        height: var(--heightTextarea);
    }

    textarea {
        padding-left: 10px;
        font-weight: 400;
    }

    ::placeholder {
        color: var(--blackgrey);
    }
</style>