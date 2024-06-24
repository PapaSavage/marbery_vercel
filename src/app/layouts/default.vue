<template>
    <header style="z-index: 10;">
        <NavBar></NavBar>
    </header>
    <slot />
    <footer style="z-index: 0;">
        <FooterBar></FooterBar>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>