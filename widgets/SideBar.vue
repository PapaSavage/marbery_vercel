<template>
    <div class="sidebar" :class="sidebtn">
        <div class="sidebar__header">
            <a href="logo">
                <img src="../public/logo.svg" alt="" style="width: 150px;">
            </a>
            <button @click="$emit('closeSidebar')" style="background-color: transparent;">
                <font-awesome icon="xmark" style="color: white; height: 100%" />
            </button>
        </div>
        <div class="sidebar__links">
            <a href="\" v-for="item in links">{{ item.title }}</a>
        </div>
        <div class="sidebar__buttons">
            <CustomButton @click="console.log('test')" title="Войти" btnclass="btn btn-gradient button_width_full">
            </CustomButton>
            <CustomButton @click="console.log('test')" title="Создать аккаунт"
                btnclass="btn btn-gradient button_width_full">
            </CustomButton>
            <CustomButton @click="console.log('test')" title="Подключиться как фотограф"
                btnclass="btn btn-gradient button_width_full">
            </CustomButton>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['sidebtn']);

const links = ref([
    {
        title: "Для фотографов",
        to: "/"
    },
    {
        title: "В школах",
        to: "/school"
    },
    {
        title: "В детских садах",
        to: "/detsad"
    },
    {
        title: "Контакты",
        to: "/contacts"
    }
])
</script>

<style scoped lang="scss">
.sidebar {
    background-color: #282828;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    padding: 1.25rem 0.9375rem 0.9375rem;
    gap: 30px;
    transform: translateX(-100%);
    transition: 0.5s;

    @media screen and (min-width: 578px) {
        width: 75%;
    }

    @media screen and (min-width: 375px) {
        padding-top: 20px;
        padding-bottom: 70px;
    }

    &.active {
        transform: translateX(0);
    }

    &__header {
        display: flex;
        justify-content: space-between;
    }

    &__links {
        display: flex;
        flex-direction: column;
        gap: 25px;
        font-size: 18px;
        color: #ffffff !important;
    }

    &__buttons {
        display: flex;
        flex-basis: 0;
        gap: 8px;
        margin-top: 10px;

        .btn {
            height: 2.625rem;
            flex-grow: 1;
            padding-left: 10px;
            padding-right: 10px;
        }
    }
}
</style>