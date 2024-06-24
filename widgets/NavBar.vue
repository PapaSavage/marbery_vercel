<template>
    <div class="header container">
        <div class="header__logo">
            <button class="hidden-at-lg" @click="sidebar_is_show = true; console.log('Открываем')"
                style="background-color: transparent;">
                <font-awesome icon="bars" style="color: #a129ff; font-size: 35px;" class="" />
            </button>
            <a href="logo">
                <img src="../public/logo.svg" alt="" style="width: 150px;">
            </a>
        </div>

        <div class="header__links">
            <a href="\" v-for="item in links">{{ item.title }}</a>
        </div>

        <div class="header__buttons ">
            <CustomButton @click="console.log('test')" title="Войти" btnclass="btn btn-gray"></CustomButton>
            <CustomButton @click="console.log('test')" title="Создать аккаунт" btnclass="btn btn-gradient hidden-by-lg">
            </CustomButton>
            <button class="btn btn-gradient hidden-at-lg">
                <font-awesome icon="user-plus" />
            </button>
        </div>
    </div>
    <SideBar :class="{ 'active': sidebar_is_show }" @closeSidebar="sidebar_is_show = false"></SideBar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface Link {
    title: string
    to: string
}
const sidebar_is_show = ref(false);

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
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    @media screen and (min-width: 992px) {
        height: 60px;
    }

    a {
        font-size: 12px;
        color: #282828;

        @media screen and (min-width: 1200px) {
            font-size: 15px;
        }

        &:hover {
            color: #A0A0A0;
        }
    }

    &__links {
        display: none;
        align-items: center;
        gap: 20px;
        margin-top: 3px;

        @media screen and (min-width:990px) {
            display: flex;
        }

        @media screen and (min-width: 1200px) {
            gap: 24px;
        }

    }

    &__logo {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            @media screen and (max-width: 1200px) {
                width: 120px !important;
            }
        }
    }

    .header__buttons {

        display: flex;
        gap: 10px;

        .btn {
            padding: 10px;

            @media screen and (max-width: 992px) {
                font-size: 13px !important;
            }

            @media screen and (min-width: 992px) {
                padding: 10px 14px;
            }
        }


    }

    .btn__header {
        height: 35px;
    }

}
</style>