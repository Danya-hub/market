<template>
    <label>
        <i class="far" :class="`fa-${icon}`"></i>
        <span class="panel">Выбрать файл</span>
        <input type="file" id="file">
    </label>
</template>

<script>
    export default {
        name: 'File',
        props: {
            icon: {type: String, required: true}
        }
    }
</script>

<style scoped>
    label {
        display: flex;
        border: 1px solid;
        color: var(--white);
        border-radius: var(--borderRadius);
        padding-left: 16px;
        cursor: pointer;
    }

    [type="file"] {
        display: none;
    }

    i {
        align-self: center;
        padding: 14px 0;
    }

    span {
        align-self: center;
        padding: 0 10px;
        font-weight: 400;
    }
</style>