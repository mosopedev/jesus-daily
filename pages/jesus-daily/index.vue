<template>
    <div>
        <Navbar />
        <div data-aos="fade-up" class="hero-section">
            <div class="hero-text-content">
                <p class="green-pill center">Live Now!</p>
                <h1>
                    Jesus Daily<br /><span class="green-txt">Devotional</span>
                </h1>
                <p data-aos="fade-up" class="hero-description">
                    A short-form (5 minutes or less) video devotional, guiding all people to have a heart of daily
                    worship and study of the Word of God. It is led by believers from all over the world inspired by the
                    <span class="green-txt">Holy Spirit</span>.
                </p>
                <NuxtLink to="/jesus-daily/reservation">
                    <button class="green-round-btn">
                        Lead a devotional
                    </button>
                </NuxtLink>
            </div> 
        </div>
        <div class="featured-episodes-sect">
            <!-- <h2>FEATURED EPISODES</h2> -->
            <div class="featured-episodes">
                <div class="episode" @mouseover="currentHoverElem = 1" @mouseout="currentHoverElem = ''">
                    <video class="episode-bg" src="https://res.cloudinary.com/knjbnf-jbdusn/video/upload/v1735448227/Figtree%20Studios/abbzsaetsu7denssso6q.mp4" autoplay loop muted></video>
                    <div class="episode-overlay">
                        <div :class="['episode-preview', currentHoverElem == 1 ? 'move-up' : '']">
                            <p>2 Corinthians 5:17</p>
                        </div>

                        <div :class="['desc-box', currentHoverElem == 1 ? 'show' : '']">
                            <p class="episode-desc">
                                Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new
                                is here!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="episode" @mouseover="currentHoverElem = 2" @mouseout="currentHoverElem = ''">
                    <video class="episode-bg" src="https://res.cloudinary.com/knjbnf-jbdusn/video/upload/v1735448227/Figtree%20Studios/kg3ocsbzmywnqnr6qaad.mp4" autoplay loop muted></video>
                    <div class="episode-overlay">

                        <div :class="['episode-preview', currentHoverElem == 2 ? 'move-up' : '']">
                            <p>Lamentations 3:22-23</p>
                        </div>

                        <div :class="['desc-box', currentHoverElem == 2 ? 'show' : '']">
                            <p class="episode-desc">
                                Because of the Lord’s great love we are not consumed, for his compassions never fail.
                                They are...
                            </p>
                        </div>
                    </div>
                </div>
                <div class="episode" @mouseover="currentHoverElem = 3" @mouseout="currentHoverElem = ''">
                    <video class="episode-bg" src="https://res.cloudinary.com/knjbnf-jbdusn/video/upload/v1735448227/Figtree%20Studios/k8r9zuj2tnqf2zjmhkkt.mp4" autoplay loop muted></video>
                    <div class="episode-overlay">

                        <div :class="['episode-preview', currentHoverElem == 3 ? 'move-up' : '']">
                            <p>Philippians 3:13-14</p>
                        </div>

                        <div :class="['desc-box', currentHoverElem == 3 ? 'show' : '']">
                            <p class="episode-desc">
                                Brothers and sisters, I do not consider myself yet to have taken hold of it. But one
                                thing I do: Forgetting what is behind...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <NuxtLink to="/jesus-daily/reservation" class="cta-join-text">
            Inspire others to draw closer to God.
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.01" y="24" width="24" height="24" transform="rotate(-90 0 24)" fill="#00BF63" />
                <path
                    d="M10.0058 17.0158C9.74 17.0173 9.48452 16.913 9.2958 16.7258C9.10649 16.538 9 16.2824 9 16.0158C9 15.7492 9.10649 15.4936 9.2958 15.3058L12.6058 12.0158L9.4258 8.7058C9.03807 8.31576 9.03807 7.68584 9.4258 7.2958C9.61356 7.10649 9.86916 7 10.1358 7C10.4024 7 10.658 7.10649 10.8458 7.2958L14.7058 11.2958C15.0869 11.6846 15.0869 12.307 14.7058 12.6958L10.7058 16.6958C10.5245 16.8916 10.2725 17.0068 10.0058 17.0158Z"
                    fill="#00BF63" />
            </svg>

        </NuxtLink>

        <div class="podcast-cta">
            <h2>FOLLOW JESUS DAILY ON SOCIAL MEDIA</h2>
            <div class="platforms">
                <div class="platform">
                    <NuxtLink to="/">
                        <img src="/icons/twitter-x.svg" alt="">
                    </NuxtLink>
                </div>
                <div class="platform">
                    <NuxtLink to="/">
                        <img src="/icons/instagram-social.svg" alt="">
                    </NuxtLink>
                </div>
                <div class="platform">
                    <NuxtLink to="/">
                        <img src="/icons/tiktok.svg" alt="">
                    </NuxtLink>
                </div>
                <!-- <div class="platform">
                    <NuxtLink to="/">
                        <img src="/icons/youtube-red.svg" alt="">
                    </NuxtLink>
                </div> -->
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
const currentHoverElem = ref()
</script>


<style scoped>
.hero-section {
    width: 90%;
    margin: 5vh auto;
    /* background-color: aquamarine; */
}

.green-pill {
    margin: 0 auto 2vh;
    font-size: 20px;
    font-family: "ClashDisplay-Medium";
}

.green-round-btn {
    background: transparent;
    font-size: 22px;
    height: fit-content;
    font-weight: 600;
    padding: 10px 15px;
    color: #00bf63;
    border: 1px solid #00bf63;
    transition: all .8s;
}

.green-round-btn:hover {
    background-color: #00bf63;
    color: #fff;
    padding: 10px 20px;
}

.hero-text-content {
    width: 80%;
    margin: 5vh auto 0;
    text-align: center;
    /* background-color: rebeccapurple; */
}

.powered-by {
    width: 100%;
    margin: 20px auto 0;
    display: flex;
    justify-content: center;
}

.powered-by p {
    color: #767676;
    text-align: center;
    font-family: "Urbanist";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
}

.powered-by img {
    width: 100px;
    margin-left: 2px;
}

.green-txt {
    color: #00bf63;
}



.hero-text-content h1 {
    color: var(--Color-Grey-100, #1a1a1a);
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-family: "ClashDisplay-Semibold";
    font-weight: 700;
    line-height: 74px;
    /* 115.625% */
    letter-spacing: -1.156px;
}

.hero-description {
    width: 85%;
    color: #767676;
    text-align: center;
    font-family: "Urbanist";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    margin: 5vh auto 40px;
}


.featured-episodes-sect {
    margin: 5vh auto;
    width: 100%;
    /* background-color: rebeccapurple; */
}
.podcast-cta {
    margin-top: 20vh;
}

.featured-episodes-sect h2,
.podcast-cta h2 {
    color: #1a1a1a;
    text-align: center;
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;

}


.featured-episodes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5vh 0 1vh;
}

.episode {
    width: 310px;
    height: 500px;
    position: relative;
    border-radius: 10px;
    border: 2px solid #00bf63;
    overflow: hidden;
    margin: 10px;
}

.episode:first-of-type {
    transform: rotate(-4deg)
}

.episode:last-of-type {
    transform: rotate(4deg)
}

.episode-bg {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.episode-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.413);
    z-index: 1;
    transition: all .5s;
}

.episode-overlay:hover {
    background-color: rgba(0, 0, 0, 0.544);
}

.streaming-platforms {
    background: whitesmoke;
    position: absolute;
    padding: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    top: 10px;
    left: auto;
    right: -999px;
    transition: all ease-in-out .5s;
}

.streaming-platforms.show {
    right: 0;
}

.streaming-platforms img {
    width: 25px;
    cursor: pointer;
    margin: 0 5px 0;
}

.play-btn {
    /* width: 60px; */
    /* height: 60px; */
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.188);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .5s;
}

.play-btn:hover {
    background-color: rgba(255, 255, 255, 0.82);
}

.episode-preview {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 10px;
    -moz-column-gap: 10px;
    -webkit-column-gap: 10px;
    padding: 10px;
    transition: all .5s;
}

.episode-preview.move-up {
    bottom: 150px;
}

.desc-box {
    position: absolute;
    bottom: -999px;
    width: 100%;
    padding: 10px;
    height: fit-content;
    /* background-color: #00bf63; */
    transition: all .6s;
}

.desc-box.show {
    bottom: 20px;
}

.episode-desc {
    color: aliceblue;
    padding: 10px;
    width: 100%;
    width: 100%;
    font-size: 18px;
}

.episode-preview p {
    color: #B2FFD9;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    font-size: 20px;
    font-weight: 600;
    padding-left: 10px;
}

.platforms {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.platform {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    cursor: pointer;
}

.platform img {
    width: 32px;
}

.cta-join-text {
    font-size: 22px;
    font-family: "poppins";
}
</style>
