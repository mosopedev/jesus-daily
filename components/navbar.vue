<template>
    <div class="navbar-container">
        <NuxtLink to="/">
            <img class="nav-logo" src="/images/word-logo.svg" alt="Figtree Studios Logo">
        </NuxtLink>
        <div class="navbar-rhs">
            <div class="nav-items">
                <NuxtLink to="/" :class="[$route.fullPath === '/' ? 'active' : '']">
                    Home
                </NuxtLink>
                <NuxtLink to="/jesus-daily" :class="[$route.fullPath === '/jesus-daily' ? 'active' : '']">
                    Jesus Daily
                </NuxtLink>
                <NuxtLink to="/podcast" :class="[$route.fullPath === '/podcast' ? 'active' : '']">
                    Yours Deeply Podcast
                </NuxtLink>
                <!-- <NuxtLink to="/team" :class="[ $route.fullPath === '/team' ? 'active' : '']">
                    Team
                </NuxtLink> -->
                <button class="green-round-btn">
                    Contact Us
                </button>
            </div>

            <div class="hamburger-menu" @click="toggleMenu">
                <div :class="{ 'bar1': true, 'change': isMenuOpen }"></div>
                <div :class="{ 'bar2': true, 'change': isMenuOpen }"></div>
                <div :class="{ 'bar3': true, 'change': isMenuOpen }"></div>
            </div>
        </div>
        <div class="mobile-nav" :class="{ show: isMenuOpen }">
            <div class="mobile-nav-links" data-aos="fade-in">
                <div class="nav-items">
                    <NuxtLink to="/" :class="[$route.fullPath === '/' ? 'active' : '']">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/jesus-daily" :class="[$route.fullPath === '/jesus-daily' ? 'active' : '']">
                        Jesus Daily
                    </NuxtLink>
                    <NuxtLink to="/podcast" :class="[$route.fullPath === '/podcast' ? 'active' : '']">
                        Yours Deeply Podcast
                    </NuxtLink>

                </div>
                <button class="green-round-btn">
                    Contact Us
                </button>
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
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    /* padding: 0 75px; */
}

.navbar-rhs {
    display: flex;
    align-items: center;
}

.nav-items {
    margin-right: 30px;
}

.nav-items a {
    font-size: 18px;
    font-family: "ClashDisplay-Medium";
    /* font-weight: 700; */
    color: #818181;
    margin: 0 15px;
}

.nav-items a.active {
    color: #000;
    font-family: "ClashDisplay-Semibold";
}

.green-round-btn {
    font-size: 16px;
    font-weight: 600;
}

.nav-logo {
    width: 150px;
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

.mobile-nav {
    position: absolute;
    background: #1A191E;
    top: -999px;
    left: 0;
    right: 0;
    opacity: 0;
    margin: 10vh auto 0;
    width: 90%;
    height: fit-content;
    padding: 30px 20px;
    border-radius: 20px;
    /* display: none; */
    z-index: 1;
    transition: all 0.5s;
}

.mobile-nav button {
    width: 100%;
}

.mobile-nav-links .nav-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.mobile-nav-links .nav-items a {
    /* font-size: 20px; */
    color: #fff;
}

.mobile-nav-links .nav-items a:last-of-type {
    margin-bottom: 20px;
}

@media (max-width: 900px) {
    .nav-items {
        display: none;
    }

    .hamburger-menu {
        display: flex;
    }

    .nav-logo {
        width: 130px;
    }

    .mobile-nav.show {
        /* display: block; */
        top: 0px;
        opacity: 1;
    }
}

@media (max-width: 500px) {
    .nav-items {
        display: none;
    }

    .hamburger-menu {
        display: flex;
    }

    .nav-logo {
        width: 110px;
    }

    .green-round-btn {
        display: none;
    }

    .hamburger-menu div {
        margin: 3px 0;
    }
}
</style>