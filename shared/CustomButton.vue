<template>
    <button class="" :class="btnclass">
        {{ title }}
    </button>
</template>
<script setup lang="ts">
const props = defineProps(['title', 'btnclass']);

</script>

<style lang="scss">
.btn {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.2;
    padding: 0.5rem 1.125rem;
    border-radius: 0.1875rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 992px) {
        padding: 10px 14px;
    }
}

.btn-primary {
    height: 2.625rem;
    color: #fff;
    border: none;
    background: linear-gradient(119.64deg, #C071FF 21.1%, #A129FF 80.68%);
    box-shadow: 0px 0px 30px rgba(113, 117, 216, 0.2);
    transition: box-shadow 0.3s ease;
}

.btn-gradient {
    background-image: linear-gradient(119.64deg, #C071FF 21.1%, #A129FF 80.68%);
    transition: box-shadow 0.3s ease;
    box-shadow: 0px 0px 30px rgba(113, 117, 216, 0.2);

    color: #FFFFFF;

    &:hover {
        background-image: linear-gradient(to bottom right, #fc923b, #A129FF);
    }

    &:active {
        filter: brightness(110%);
    }
}

.btn-gray {
    background-color: #F7F7F7;

    &:hover {
        filter: brightness(95%);
    }

    transition: all 0.3s;
}

@media (max-width: 991.98px) {
    .button_width_full-lg {
        width: 100%;
    }
}

.button__icon.button__icon_right {
    margin-left: 8px;
}

.button-sun {
    height: 2.625rem;
    color: #fff;
    border: none;
    background: #ffa500;
    border-color: #ffa500;
}

.button-sun:hover {
    background: #ffa500;
    border-color: #ffa500;
    box-shadow: 11px 16px 30px rgba(202, 154, 119, 0.37);
}

.button-sun:active {
    background: #ffb800;
    border-color: #ffa500;
    box-shadow: 11px 16px 30px rgba(202, 154, 119, 0.37);
}

.button-sun[data-disabled="1"],
.button-sun[data-active="0"] {
    opacity: 0.3;
    pointer-events: none;
}

.button-sun-secondary {
    height: 2.625rem;
    color: #ffa500;
    border: none;
    background: transparent;
    border: 2px solid #ffa500;
}

.button-sun-secondary.button_small {
    height: auto;
}

.button-sun-secondary:hover {
    color: #fff;
    background: #ffa500;
    box-shadow: 0px 0px 30px rgba(202, 154, 119, 0.37);
}

.button-sun-secondary:active,
.button-sun-secondary.active,
.button-sun-secondary[data-active="1"] {
    color: #fff;
    background: #ffb800;
    box-shadow: 0px 0px 30px rgba(202, 154, 119, 0.37);
}
</style>