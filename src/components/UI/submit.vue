<template>
    <button type="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Add'
    }
</script>

<style>
    button {
        color: var(--white);
        padding: 14px;
    }
</style>