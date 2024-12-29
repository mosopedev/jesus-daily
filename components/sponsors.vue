<template>
    <div class="sponsors-container">
        <h2 v-if="$route.fullPath != '/podcast'" class="sponsor-sect-title">
            Our Sponsors
        </h2>
        <h2 v-if="$route.fullPath == '/podcast'" class="sponsor-sect-title">
            Our Podcast Sponsors
        </h2>
        <div class="sponsors">
            <div class="sponsor-box">
                <img src="/icons/google-logo-white.svg" class="sponsor-logo" alt="">
            </div>
            <div class="sponsor-box">
                <img src="/icons/twitter-logo-white.svg" class="sponsor-logo" alt="">
            </div>
            <div class="sponsor-box">
                <img src="/icons/klarna-logo-white.svg" class="sponsor-logo" alt="">
            </div>
            <div class="sponsor-box">
                <img src="/icons/shopify-logo-white.svg" class="sponsor-logo" alt="">
            </div>
            <div class="sponsor-box">
                <img src="/icons/squarespace-logo-white.svg" class="sponsor-logo" alt="">
            </div>
            <div class="sponsor-cta" @mouseenter="activeHover = true" @mouseleave="activeHover = false">
                <p class="cta-title">
                    Become a sponsor
                </p>
                <img :class="[activeHover == true ? 'active': '']" src="/icons/paper-plane.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
const activeHover = ref(false);
</script>

<style scoped>
.sponsors-container {
    width: 90%;
    margin: 20vh auto 10vh;
}
.sponsor-sect-title {
    color: #1A1A1A;
    font-size: 52px;
    font-style: normal;
    font-weight: 600;
    line-height: 62px;
    letter-spacing: -0.939px;
}
.sponsors {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin: 40px 0 0;
}

.sponsor-box {
    border-radius: 10px;
    background: #1A1A1A;
    width: calc(33.33% - 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    transition: all .5s;
    cursor: pointer;
}
.sponsor-box:hover {
    background-color: #00BF63;
}
.sponsor-box img {
    height: 30px;
}
.sponsor-cta {
    border-radius: 10px;
    background: #00BF63;
    width: calc(33.33% - 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */
    transition: all .5s;
    cursor: pointer;
}
.sponsor-cta .cta-title {
    color:#FEFEFE;
    font-family: "Inter";
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 111%;
}
.sponsor-cta img {
    height: 30px;
    transform: rotate(45deg);
    margin-left: 10px;
    transition: all .5s;
}
.sponsor-cta img.active {
    margin-left: 20px;
}
.sponsor-cta:hover {
    background-color: #1A1A1A;
}

</style>