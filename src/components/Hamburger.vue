<template>
<div class="ham">
    <span></span>
</div>
</template>
<script>
export default {
    name: 'Hamburger',
    data() {
        return {
            isActive: false
        }
    }
}
</script>
<style scoped>
.ham {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
    color: #151515;
    background-color: transparent;
    border: none;
}
.ham span {
    width: 24px;
    height: 4px;
    background-color: #151515;
    backface-visibility: hidden;
    display: block;
    position: relative;
    transform: rotate(180deg);
    transition: all 0.3s ease;
}

.ham span:before,
.ham span:after {
    width: 24px;
    height: 4px;
    background-color: #151515;
    backface-visibility: hidden;
    display: block;
    content: '';
    position: absolute;
    transform-origin: 1.71429px center;
}
.ham span:before {
    left: 0;
    top: -8px;
}

.ham span:after {
    top: 8px;
}


.ham.active span{
    transform: rotate(360deg);
}
.ham.active span:before {
    transform: rotate3d(0, 0, 1, -40deg);
    top: 0;
    width: 15px;
}
.ham.active span:after{
    transform: rotate3d(0, 0, 1, 40deg);
    top: 0;
    width: 15px;
}

</style>