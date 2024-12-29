<template>
    <div>
        <Navbar />
        <div data-aos="fade-up" data-aos-delay="300" class="hero-section">
            <div class="hero-text-content">
                <p class="green-pill center">Coming Soon</p>
                <h1>
                    Yours Deeply <br /><span class="green-txt">Podcast</span>
                </h1>
                <!-- <div data-aos="fade-up" data-aos-delay="700" class="powered-by">
                    
                    <p>powered by</p>
                    <img src="/images/black-techwade-text-logo.svg" alt="" />
                </div> -->
                <p data-aos="fade-up" data-aos-delay="500" class="hero-description">
                    "Yours Deeply" is a podcast series focused on personal growth, spiritual development, and building sustainable habits for a purposeful life. Join us and our guests as we set out on the journey of self discovery, exploring critical themes like technology, health, psychology, finance, spirituality and relationships.
                </p>
            </div>
        </div>
        <div class="featured-episodes-sect">
            <!-- <h2>FEATURED EPISODES</h2> -->
            <!-- <div class="featured-episodes">
                <div class="episode" @mouseover="currentHoverElem = 1" @mouseout="currentHoverElem = ''">
                    <img class="episode-bg" src="/images/programs-media.webp" alt="" />
                    <div class="episode-overlay">
                        <div :class="['streaming-platforms', currentHoverElem == 1 ? 'show' : '']">
                            <NuxtLink to="/podcast">
                                <img src="/icons/apple-music.svg" alt="">
                            </NuxtLink>
                            <NuxtLink to="/"><img src="/icons/apple-podcast.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/spotify.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/google-podcast.svg" alt=""></NuxtLink>
                        </div>

                        <div :class="['episode-preview', currentHoverElem == 1 ? 'move-up' : '']">
                            <div class="play-btn">
                                <img src="/icons/green-play.svg" alt="Play">
                            </div>
                            <p>Forward Thinking: Building for the future.</p>
                        </div>

                        <div :class="['desc-box', currentHoverElem == 1 ? 'show' : '']">
                            <p class="episode-desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit architecto consectetur
                                tempore totam fugiat nostrum suscipit nam! Atque, maiores numquam nihil enim nemo sed
                                nobis deserunt laboriosam nam aliquam eum.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="episode" @mouseover="currentHoverElem = 2" @mouseout="currentHoverElem = ''">
                    <img class="episode-bg" src="/images/community-hangout.jpeg" alt="" />
                    <div class="episode-overlay">
                        <div :class="['streaming-platforms', currentHoverElem == 2 ? 'show' : '']">
                            <NuxtLink to="/">
                                <img src="/icons/apple-music.svg" alt="">
                            </NuxtLink>
                            <NuxtLink to="/"><img src="/icons/apple-podcast.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/spotify.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/google-podcast.svg" alt=""></NuxtLink>
                        </div>

                        <div :class="['episode-preview', currentHoverElem == 2 ? 'move-up' : '']">
                            <div class="play-btn">
                                <img src="/icons/green-play.svg" alt="Play">
                            </div>
                            <p>Forward Thinking: Building for the future.</p>
                        </div>

                        <div :class="['desc-box', currentHoverElem == 2 ? 'show' : '']">
                            <p class="episode-desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit architecto consectetur
                                tempore totam fugiat nostrum suscipit nam! Atque, maiores numquam nihil enim nemo sed
                                nobis deserunt laboriosam nam aliquam eum.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="episode" @mouseover="currentHoverElem = 3" @mouseout="currentHoverElem = ''">
                    <img class="episode-bg" src="/images/programs-mentorship.jpeg" alt="" />
                    <div class="episode-overlay">
                        <div :class="['streaming-platforms', currentHoverElem == 3 ? 'show' : '']">
                            <NuxtLink to="/">
                                <img src="/icons/apple-music.svg" alt="">
                            </NuxtLink>
                            <NuxtLink to="/"><img src="/icons/apple-podcast.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/spotify.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/google-podcast.svg" alt=""></NuxtLink>
                        </div>

                        <div :class="['episode-preview', currentHoverElem == 3 ? 'move-up' : '']">
                            <div class="play-btn">
                                <img src="/icons/green-play.svg" alt="Play">
                            </div>
                            <p>Forward Thinking: Building for the future.</p>
                        </div>

                        <div :class="['desc-box', currentHoverElem == 3 ? 'show' : '']">
                            <p class="episode-desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit architecto consectetur
                                tempore totam fugiat nostrum suscipit nam! Atque, maiores numquam nihil enim nemo sed
                                nobis deserunt laboriosam nam aliquam eum.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="episode" @mouseover="currentHoverElem = 4" @mouseout="currentHoverElem = ''">
                    <img class="episode-bg" src="/images/programs-summit.jpeg" alt="" />
                    <div class="episode-overlay">
                        <div :class="['streaming-platforms', currentHoverElem == 4 ? 'show' : '']">
                            <NuxtLink to="/">
                                <img src="/icons/apple-music.svg" alt="">
                            </NuxtLink>
                            <NuxtLink to="/"><img src="/icons/apple-podcast.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/spotify.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/google-podcast.svg" alt=""></NuxtLink>
                        </div>

                        <div :class="['episode-preview', currentHoverElem == 4 ? 'move-up' : '']">
                            <div class="play-btn">
                                <img src="/icons/green-play.svg" alt="Play">
                            </div>
                            <p>Forward Thinking: Building for the future.</p>
                        </div>

                        <div :class="['desc-box', currentHoverElem == 4 ? 'show' : '']">
                            <p class="episode-desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit architecto consectetur
                                tempore totam fugiat nostrum suscipit nam! Atque, maiores numquam nihil enim nemo sed
                                nobis deserunt laboriosam nam aliquam eum.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="episode" @mouseover="currentHoverElem = 5" @mouseout="currentHoverElem = ''">
                    <img class="episode-bg" src="/images/programs-projects.jpeg" alt="" />
                    <div class="episode-overlay">
                        <div :class="['streaming-platforms', currentHoverElem == 5 ? 'show' : '']">
                            <NuxtLink to="/">
                                <img src="/icons/apple-music.svg" alt="">
                            </NuxtLink>
                            <NuxtLink to="/"><img src="/icons/apple-podcast.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/spotify.svg" alt=""></NuxtLink>
                            <NuxtLink to="/"><img src="/icons/google-podcast.svg" alt=""></NuxtLink>
                        </div>

                        <div :class="['episode-preview', currentHoverElem == 5 ? 'move-up' : '']">
                            <div class="play-btn">
                                <img src="/icons/green-play.svg" alt="Play">
                            </div>
                            <p>Forward Thinking: Building for the future.</p>
                        </div>

                        <div :class="['desc-box', currentHoverElem == 5 ? 'show' : '']">
                            <p class="episode-desc">

                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit architecto consectetur
                                tempore totam fugiat nostrum suscipit nam! Atque, maiores numquam nihil enim nemo sed
                            </p>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="podcast-cta">
            <h2>SUBSCRIBE TO US ON YOUR FAVOURITE PLATFORMS</h2>
            <div class="platforms">
                <div class="platform">
                    <NuxtLink to="/">
                        <img src="/icons/apple-music.svg" alt="">
                    </NuxtLink>
                </div>
                <div class="platform">
                    <NuxtLink to="/">
                        <img src="/icons/instagram.svg" alt="">
                    </NuxtLink>
                </div>
                <div class="platform">
                    <NuxtLink to="/">
                        <img src="/icons/spotify.svg" alt="">
                    </NuxtLink>
                </div>
                <div class="platform">
                    <NuxtLink to="/">
                        <img src="/icons/google-podcast.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <!-- <Sponsors /> -->
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
    margin: 14vh auto;
    width: 100%;
    /* background-color: rebeccapurple; */
}

.featured-episodes-sect h2,
.podcast-cta h2 {
    color: #767676;
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
    margin: 5vh 0;
}

.episode {
    width: 350px;
    height: 500px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;
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
    bottom: 180px;
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
    bottom: 0;
}

.episode-desc {
    color: aliceblue;
    padding: 10px;
    width: 100%;
    /* text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical; */
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
</style>
