<template>
    <div class="navbar-container">
        <img class="nav-logo" src="/images/word-logo.svg" alt="Figtree Studios Logo">
        <div class="navbar-rhs">
            <div class="nav-items">
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
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.navbar-container {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 75px;
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
</style>