<template>
    <div class="cta-container">
        <div class="cta-sect">
            <p class="cta-text">
                SUPPORT OUR
            </p>
            <img data-aos="fade-up" src="/images/community-cutout.svg" alt="support our community">
        </div>
        <div class="cta-prompts-sect">
            <div class="prompt">
                <div class="feature-icon">
                    <img src="/icons/gift.svg" alt="">
                </div>
                <p class="prompt-title">
                    Donate
                </p>
                <p class="prompt-desc">
                    Become a sponsor or donate today to support our ongoing efforts in empowering and connecting tech enthusiasts and professionals on a global scale.
                </p>
                <button class="green-round-btn">
                    Learn More
                </button>
            </div>
            <div class="prompt">
                <div class="feature-icon">
                    <img src="/icons/fun.svg" alt="">
                </div>
                <p class="prompt-title">
                    Volunteer
                </p>
                <p class="prompt-desc">
                    Explore volunteer opportunities from Trybe mentorship to video editing and beyond, contributing your skills to empower and drive community initiatives.
                </p>
                <button class="green-round-btn">
                    Let's go!
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.feature-icon {
    background: radial-gradient(50% 50% at 50% 50%, #FFF 0%, #34A853 100%);
    height: 54px;
    width: 54px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cta-container {
    width: 90%;
    margin: 20vh auto 10vh;
    /* background-color: rebeccapurple; */
}
.cta-sect {
    text-align: center;
}
.cta-text {
    color: #1A1A1A;
    text-align: center;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    letter-spacing: -0.939px;
}
.cta-prompts-sect {
    display: flex;
    gap: 30px;
    margin: 40px 0 0;
}
.cta-prompts-sect .prompt {
    height: fit-content;
    padding: 40px 0;
    width: 50%;
    border-radius: 15px;
    border: 3px solid #00BF63;
    /* background-color: rebeccapurple; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.prompt-title {
    color: #1A1A1A;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: -0.578px;
    margin: 24px 0 0;
}
.prompt-desc {
    color: #484848;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-family: "poppins";
    font-weight: 500;
    line-height: 30px;
    /* letter-spacing: -0.361px; */
    width: 80%;
    margin: 16px auto 0;
}
.green-round-btn {
    width: 50%;
    margin: 35px 0 0;
    color: #FFF;
    text-align: center;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}
</style>