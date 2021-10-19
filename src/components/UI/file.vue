<template>
    <label>
        <i class="far" :class="`fa-${icon}`"></i>
        <span class="panel">Выбрать файл</span>
        <input type="file" id="file" @change="_getContent">
    </label>
</template>

<script>
    export default {
        name: 'File',
        props: {
            icon: {type: String, required: true}
        },
        methods: {
            _getContent(event) {
                const reader = new FileReader();
                let img = document.createElement('img');
                
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => img.src = reader.result;

                console.log(img);
                this.$emit('image', img);
            }
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
    }
</style>