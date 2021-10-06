<template>
    <button ref="switch" type="button" @click="_setSwitch">
        <span ref="slider"></span>
    </button>
</template>

<script>
    let bool = false;

    export default {
        methods: {
            _setSwitch() {
                !bool ? bool = true : bool = false;
                this.$emit('switch', bool);

                this._setAnimation();
            },
            _setAnimation() {
                let switchBtn = this.$refs.switch,
                    point = this.$refs.slider;

                bool ?
                    (point.style.left = switchBtn.offsetWidth - point.offsetWidth - parseInt(getComputedStyle(
                        point, null).marginLeft) - parseInt(getComputedStyle(point, null).marginRight) + 'px',
                        switchBtn.style.background = 'var(--lightgreen)') :
                    (point.style.left = '0px', 
                    switchBtn.style.background = 'var(--grey)');
            }
        }
    }
</script>

<style scoped>
    button {
        position: relative;
        box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255);
        background: var(--grey);
        transition: var(--transDuration) background;
        min-width: 50px;
        width: fit-content;
        height: var(--switchHeight);
        margin-left: 10px;
        border-radius: var(--borderRadius);
        padding: 0;
        overflow: hidden;
    }

    span {
        position: absolute;
        background: var(--white);
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        width: var(--sizePoint);
        height: var(--sizePoint);
        margin: calc((var(--switchHeight) - var(--sizePoint)) / 2);
        transition: var(--transDuration) left;
        top: 0;
        left: 0px;
    }
</style>