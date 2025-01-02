<template>
    <div class="navbar-container">
        <NuxtLink to="/">
            <img class="nav-logo" src="/images/word-logo.svg" alt="Figtree Studios Logo">
        </NuxtLink>
        <div class="navbar-rhs">
            <div class="nav-items" :class="{ 'open': isMenuOpen }">
                <NuxtLink to="/" :class="[ $route.fullPath === '/' ? 'active' : '']">
                    Home
                </NuxtLink>
                <NuxtLink to="/jesus-daily" :class="[ $route.fullPath === '/jesus-daily' ? 'active' : '']">
                    Jesus Daily
                </NuxtLink>
                <NuxtLink to="/podcast" :class="[ $route.fullPath === '/podcast' ? 'active' : '']">
                    Yours Deeply Podcast
                </NuxtLink>
                <!-- <NuxtLink to="/team" :class="[ $route.fullPath === '/team' ? 'active' : '']">
                    Team
                </NuxtLink> -->
            </div>
            <button class="green-round-btn">
                Contact Us
            </button>
            <div class="hamburger-menu" @click="toggleMenu">
                <div :class="{ 'bar1': true, 'change': isMenuOpen }"></div>
                <div :class="{ 'bar2': true, 'change': isMenuOpen }"></div>
                <div :class="{ 'bar3': true, 'change': isMenuOpen }"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.navbar-container {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.navbar-rhs {
    display: flex;
    align-items: center;
}

.nav-items {
    display: flex;
    gap: 20px;
}

.nav-items.open {
    display: block;
}

.green-round-btn {
    margin-left: 20px;
}

.hamburger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-left: 20px;
}

.hamburger-menu div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.4s;
}

.change.bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.change.bar2 {
    opacity: 0;
}

.change.bar3 {
    transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
    .nav-items {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 80px;
        right: 20px;
        background-color: white;
        width: 200px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .hamburger-menu {
        display: flex;
    }
}
</style>