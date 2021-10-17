<template>
    <form action="">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'Form',
    }
</script>

<style>
    form>* {
        margin-bottom: 14px;
    }

    form:last-child {
        margin: 0;
    }
</style>