<template>
    <div class="newsletter-container">
        <!-- <img src="/icons/audio-track.svg" alt=""> -->
        <div class="audio-waves">
            <img data-aos="fade-up" data-aos-delay="500" src="/icons/audio-wave-1.svg" alt="">
            <img data-aos="fade-up" data-aos-delay="700" src="/icons/audio-wave-2.svg" alt="">
            <img data-aos="fade-up" data-aos-delay="900" src="/icons/audio-wave-3.svg" alt="">
            <img data-aos="fade-up" data-aos-delay="1100" src="/icons/audio-wave-4.svg" alt="">
            <img data-aos="fade-up" data-aos-delay="1300" src="/icons/audio-wave-5.svg" alt="">
            <img data-aos="fade-up" data-aos-delay="1500" src="/icons/audio-wave-6.svg" alt="">
        </div>
        <div class="newsletter-cta">
            <h4>Stay updated!</h4>
            <p class="newsletter-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium vitae eligendi ab aliquam porro labore. Ex non voluptatibus vel?
            </p>
            <div class="input-box">
                <input type="text">
                <button>Sign me up!</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.newsletter-container {
    width: 90%;
    margin: 30vh auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.newsletter-container .audio-waves {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 40px;
}
.newsletter-cta {
    width: 50%;
}
.newsletter-cta h4 {
    color: #00341D;
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -1.68px;
}
.newsletter-desc {
    margin: 45px 0;
    color: #646464;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
}
.input-box {
    display: flex;
    align-items: center;
    height: 60px;
    /* background-color: rebeccapurple; */
    position: relative;
}
.input-box input {
    width: 70%;
    height: 60px;
    border-radius: 8px;
    border: 1px solid #D1D1D1;
    padding: 0 10px 0;
    font-size: 20px;
}
.input-box input:focus {
    outline: 0;
    border: 1px solid #00341D;
}
.input-box button {
    border-radius: 8px;
    background: #00BF63;
    height: 60px;
    width: 30%;
    border: none;
    position: absolute;
    right: 10px;
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    cursor: pointer;
}
</style>