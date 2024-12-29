<template>
    <div>
        <Navbar />
        <div class="studio-intro">
            <img src="/images/content-studio-4.jpeg" alt="Content studio">
            <div class="overlay">
                <div class="hero-text-sect">
                    <h1>Content <span class="green-txt">Studio</span></h1>
                    <p class="hero-description">
                        <!-- Educative and entertaining videos crafted for tech aficionados! -->
                        Educative and entertaining videos crafted for your inner techie!
                    </p>
                </div>
            </div>
        </div>
        <div class="our-shows">
            <p class="shows-cta">NOW STREAMING</p>
            <div class="show" data-aos="fade-right">
                <img src="" class="float-bg-right" alt="">
                <div class="show-overlay float-overlay-left">
                    <div class="overlay-txt-sect">
                        <h2>Trivia Game Show</h2>
                        <p>Thrilling trivia game show, where community members compete to test their knowledge. Members answer a series of challenging questions across various tech topics, vying for the top spot.</p>
                        <button class="green-round-btn">Watch Now!</button>
                    </div>
                </div>
            </div>
            <div class="show" data-aos="fade-left">
                <img src="/images/show-build-cam.jpeg" class="float-bg-left" alt="">
                <div class="show-overlay float-overlay-right">

                    <div class="overlay-txt-sect">
                        <h2>Build Cam</h2>
                        <p>Vlog-style project showcases provide an in-depth look at tech projects from conception to completion. Follow along as innovators document every step of their journey, sharing insights, challenges, and triumphs. </p>
                        <button class="green-round-btn">Watch Now!</button>
                    </div>
                </div>
            </div>
            <div class="show" data-aos="fade-right">
                <img src="/images/show-spotlight.jpeg" class="float-bg-right" alt="">
                <div class="show-overlay float-overlay-left">
                    <div class="overlay-txt-sect">
                        <h2>Community Spotlight</h2>
                        <p>Every month, we feature a remarkable member's tech journey, highlighting their achievements, challenges, and growth. Learn from their experiences, gain inspiration, and celebrate the diverse talents within our community.</p>
                        <button class="green-round-btn">Watch Now!</button>
                    </div>
                </div>
            </div>
            <div class="show" data-aos="fade-left">
                <img src="/images/show-fireside-chat.jpeg" class="float-bg-left" alt="">
                <div class="show-overlay float-overlay-right">

                    <div class="overlay-txt-sect">
                        <h2>Expert Fireside Chat</h2>
                        <p>Engaging fireside chats featuring in-depth conversations with industry experts, where insightful discussions on trends, innovations, and personal experiences in their tech field are shared openly and intimately.</p>
                        <button class="green-round-btn">Watch Now!</button>
                    </div>
                </div>
            </div>
        </div>
        <Sponsors />
        <Footer />
    </div>
</template>

<script setup>

</script>

<style scoped>
.green-round-btn {
    font-size: 16px;
    font-weight: 600;
}
.studio-intro {
    width: 100%;
    height: 92vh;
    position: relative;
}

.studio-intro img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.649);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay h1 {
    color: #fff;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 74px;
    letter-spacing: -1.156px;
}

.green-txt {
    color: #00BF63;
}

.hero-description {
    color: #fff;
    text-align: center;
    font-family: "poppins";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    width: 80%;
    /* letter-spacing: -0.361px; */
    margin: 25px auto 40px;
}

.our-shows {
    padding: 10vh 0;
    background: #000;
    width: 100%;
}

.shows-cta {
    font-size: 50px;
    color: #fff;
    text-align: center;
    font-weight: 700;
}

.float-bg-left {
    float: left;
}

.float-bg-right {
    float: right;
}

.show {
    width: 100%;
    height: 450px;
    position: relative;
}

.show:first-of-type {
    margin: 10vh 0 0;
}

.show img {
    height: 100%;
    width: 60vw;
    object-fit: cover;
}

.show-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, black 38%, rgba(0, 0, 0, 0) 100%);
    /* background: linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0)); */

    display: flex;
    align-items: center;
}

.show-overlay.float-overlay-right {
    /* float: right; */
    /* background: linear-gradient(to left, rgb(0, 0, 0), rgba(0, 0, 0, 0)); */
    background: linear-gradient(to left, black 38%, rgba(0, 0, 0, 0) 100%);
    justify-content: right;
}

.show-overlay.float-overlay-right .overlay-txt-sect {
    text-align: right;
}

.overlay-txt-sect {
    width: 40vw;
    /* background-color: #00BF63; */
    padding: 30px;
}

.overlay-txt-sect h2 {
    font-size: 35px;
    font-weight: 600;
    font-family: 'urbanist';
    color: #fff;
    margin: 0 0 20px;
}

.overlay-txt-sect p {
    font-size: 20px;
    font-weight: 500;
    font-family: 'urbanist';
    color: #fff;
    margin: 0 0 20px;
}
</style>