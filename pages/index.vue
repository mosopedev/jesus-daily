<template>
    <div>
        <Navbar />
        <div data-aos="fade-up" data-aos-delay="300" class="hero-section">
            <div class="studio-name">
                <p>FIGTREE</p>
                <img src="/images/tree-silhouette.svg" alt="figtree" class="figtree-silohouette">
                <p>STUDIOS</p>
            </div>
            <div class="intro-video-preview">
                <!-- <video  ref="introVideo" src="/video/hero-video2.mp4" @load="play()" autoplay loop muted>
                </video> -->
                <div class="video-prev-cont">
                   <img src="/images/community-hangout.jpeg" class="video-preview-img" alt="Our community hangout">
                    <!-- <div class="video-prev-overlay"></div>  -->
                </div>
                
                <!-- <div class="play-btn" @click="play()">
                    <img src="/icons/green-play.svg" alt="Play">
                </div> -->
            </div>
            <!-- <div class="studio-name">
                <p>FIGTREE</p>
                <img src="/images/tree-silhouette.svg" alt="figtree" class="figtree-silohouette">
                <p>STUDIOS</p>
            </div> -->
            <div class="hero-text-content">
                <!-- <h1>Ready to <span class="green-txt">start</span>, <span class="green-txt">grow</span> and <span
                        class="green-txt">scale</span> your career in tech?</h1> -->
                <h1>
                    We create <span class="green-txt">digital media</span> that brings <span class="green-txt">The Good</span> news to the <span class="green-txt">World!</span> 
                </h1>
                <p class="hero-description">
                    We tell stories that amplify God's love and Christian values through creative, high-quality media content that resonates with modern audiences worldwide.
                </p>

                <!-- <NuxtLink to="/" class="cta-join-text">
                    Become a member
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.01" y="24" width="24" height="24" transform="rotate(-90 0 24)" fill="#00BF63" />
                        <path
                            d="M10.0058 17.0158C9.74 17.0173 9.48452 16.913 9.2958 16.7258C9.10649 16.538 9 16.2824 9 16.0158C9 15.7492 9.10649 15.4936 9.2958 15.3058L12.6058 12.0158L9.4258 8.7058C9.03807 8.31576 9.03807 7.68584 9.4258 7.2958C9.61356 7.10649 9.86916 7 10.1358 7C10.4024 7 10.658 7.10649 10.8458 7.2958L14.7058 11.2958C15.0869 11.6846 15.0869 12.307 14.7058 12.6958L10.7058 16.6958C10.5245 16.8916 10.2725 17.0068 10.0058 17.0158Z"
                            fill="#00BF63" />
                    </svg>

                </NuxtLink> -->
            </div>
        </div>
        <!-- <div class="about-us">
            <h2 data-aos="fade-up">Content crafted for believers worldwide.</h2>
            <div class="feature-container">
                <div data-aos="fade-up" class="feature">
                    <div class="feature-icon">
                        <img src="/icons/skills.svg" alt="">
                    </div>
                    <h3>Skill Development</h3>
                    <p class="feature-description">
                        We provide members with the expert mentorship, projects, tools and resources to enhance their tech
                        skills.
                    </p>
                </div>
                <div data-aos="fade-up" class="feature">
                    <div class="feature-icon">
                        <img src="/icons/group.svg" alt="">
                    </div>
                    <h3>Networking</h3>
                    <p class="feature-description">
                        Members learn to cultivate connections among tech enthusiasts and professionals around the world and
                        expand their horizons.
                    </p>
                </div>
                <div data-aos="fade-up" class="feature">
                    <div class="feature-icon">
                        <img src="/icons/collab.svg" alt="">
                    </div>
                    <h3>Collaboration</h3>
                    <p class="feature-description">
                        Members have the opportunity to collaborate on projects with real-world applications, making a
                        tangible impact.
                    </p>
                </div>
                <div data-aos="fade-up" class="feature">
                    <div class="feature-icon">
                        <img src="/icons/mentors.svg" alt="">
                    </div>
                    <h3>Mentorship</h3>
                    <p class="feature-description">
                        We offer members a nurturing and enriching learning environment, featuring expert-led webinars and
                        career workshops.
                    </p>
                </div>
                <div data-aos="fade-up" class="feature">
                    <div class="feature-icon">
                        <img src="/icons/content.svg" alt="">
                    </div>
                    <h3>Educative Content</h3>
                    <p class="feature-description">
                        Members have the opportunity to enhance their technical skills and knowledge through diverse
                        contents we create.
                    </p>
                </div>
                <div data-aos="fade-up" class="feature">
                    <div class="feature-icon">
                        <img src="/icons/fun.svg" alt="">
                    </div>
                    <h3>Fun</h3>
                    <p class="feature-description">
                        We create an environment where members not only grow professionally but also relish every moment of
                        their journey.
                    </p>
                </div>
            </div>
        </div> -->
       
        <div class="our-programs">
            <div class="programs-top-sect">
                <div class="lhs-programs">
                    <p class="green-pill">
                         
                    </p>
                    <h2>Our Programs</h2>
                </div>
                <div class="rhs-programs">
                    <p>Content crafted for believers worldwide: from daily devotionals to the inspiring Yours Deeply Podcast and many faith-filled films, our programs uplift hearts and guide lives with God’s Word and wisdom.</p>
                </div>
            </div>
            <div class="all-programs">
                <div class="auto-scroll-programs">
                    <div class="program left">
                        <div class="program-name">
                            <!-- <p class="green-pill">Coming Soon</p> -->
                            <p>Jesus Daily</p>
                        </div>
                        <img src="/images/programs-jesus-daily.jpg" alt="Summer Summit">
                    </div>
                    <div class="program left">
                        <div class="program-name">
                            <p class="green-pill">Coming Soon</p>
                            <p>Yours Deeply Podcast</p>
                        </div>
                        <img src="/images/podcast.jpg" alt="Yours Deeply Podcast">
                    </div>
                    <div class="program left">
                        <div class="program-name">
                            <p class="green-pill">Coming Soon</p>
                            <p>Films & Tv shows</p>
                        </div>
                        <img src="/images/films.jpg" alt="Techwade projects">
                    </div>
                    <div class="program left">
                        <div class="program-name">
                            <!-- <p class="green-pill">Coming Soon</p> -->
                            <p>Jesus Daily Newsletter</p>
                        </div>
                        <img src="/images/programs-newsletter.jpeg" alt="Summer Summit">
                    </div>
                    <div class="program left">
                        <div class="program-name">
                            <p class="green-pill">Coming Soon</p>
                            <p>Bible Study</p>
                        </div>
                        <img src="/images/programs-meetups.jpeg" alt="Summer Summit">
                    </div>
                    <div class="program left">
                        <div class="program-name">
                            <!-- <p class="green-pill">Coming Soon</p> -->
                            <p>Jesus Daily</p>
                        </div>
                        <img src="/images/programs-jesus-daily.jpg" alt="Summer Summit">
                    </div>
                    <!-- <div class="program left">
                        <div class="program-name">
                            <p class="green-pill">Coming Soon</p>
                            <p>Techwade Summer Summit</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1705112581086-51edd3b092a0" alt="Summer Summit">
                    </div> -->
                    <!-- <div class="program right">
                        <div class="program-name">
                            <p>Techwade Summer Summit</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1705112581086-51edd3b092a0" alt="Summer Summit">
                    </div> -->
                </div>
                <div class="auto-scroll-programs">
                    <div class="program right">
                        <div class="program-name">
                            <p class="green-pill">Coming Soon</p>
                            <p>Jesus Daily Newsletter</p>
                        </div>
                        <img src="/images/programs-newsletter.jpeg" alt="Summer Summit">
                    </div>
                    <div class="program right">
                        <div class="program-name">
                            <p>Films & Tv shows</p>
                        </div>
                        <img src="/images/films-production.jpg" alt="Trybe Mentorship">
                    </div>
                    <div class="program right">
                        <div class="program-name">
                            <p>Bible Study</p>
                        </div>
                        <img src="/images/programs-meetups.jpeg" alt="Content studio">
                    </div>
                    <div class="program right">
                        <div class="program-name">
                            <p class="green-pill">Coming Soon</p>
                            <p>Jesus Daily</p>
                        </div>
                        <img src="/images/programs-jesus-daily.jpg" alt="Techwade Summer Summit">
                    </div>
                    <div class="program right">
                        <div class="program-name">
                            <p>Yours Deeply Podcast</p>
                        </div>
                        <img src="/images/podcast.jpg" alt="The Digital Dispatch Podcast">
                    </div>
                    
                    <!-- <div class="program right">
                        <div class="program-name">
                            <p class="green-pill">Coming Soon</p>
                            <p>Code & Chill Meetups</p>
                        </div>
                        <img src="/images/programs-meetups.jpeg" alt="Summer Summit">
                    </div>
                    <div class="program right">
                        <div class="program-name">
                            <p class="green-pill">Coming Soon</p>
                            <p>Techwade Projects</p>
                        </div>
                        <img src="/images/programs-projects.jpeg" alt="Summer Summit">
                    </div> -->
                </div>
            </div>
        </div>
        <!-- <SupportCta /> -->
        <!-- <Sponsors /> -->
        <Faq />
        <!-- <Newsletter /> -->
        <Footer />
    </div>
</template>


<script setup>
const play = async () => {
    this.$refs.introVideo.play()
}
</script>

<style scoped>
.hero-section {
    width: 90%;
    margin: 2vh auto;
    /* background-color: aquamarine; */
}
.video-prev-cont {
    height: 100%;
    width: 100%; 
    position: relative;
}
.studio-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* background: rebeccapurple; */
    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 600;
    font-size: 120px;
    /* font-size: 7.5rem; */
    line-height: 100%;
    color: #000000;
    margin-top: 3vh;
}
.figtree-silohouette {
    height: 120px;
}
.video-prev-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.14); 
    z-index: 1;
}
.video-preview-img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
}

.intro-video-preview {
    width: 100%;
    background-color: whitesmoke;
    /* background: rebeccapurple; */
    height: 70vh;
    margin-top: 2vh;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.intro-video-preview video {
    width: 100%;
    object-fit: cover;
    height: 100%;
}

.play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-text-content {
    width: 85%;
    margin: 30vh auto 30vh;
    text-align: center;
    /* background-color: rebeccapurple; */
}

.hero-text-content h1 {
    color:  #1A1A1A;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-family: 'ClashDisplay-Bold';
    font-weight: 700;
    line-height: 74px;
    /* letter-spacing: -1.156px; */
}

.green-txt {
    color: #00BF63;
}

.hero-description {
    width: 85%;
    color: #767676;
    text-align: center;
    font-family: "Urbanist";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    /* 150% */
    letter-spacing: -0.361px;
    margin: 16px auto 40px;
}

.cta-join-text {
    color: #00BF63;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    /* 155.556% */
    letter-spacing: -0.325px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all .5s;
}

.cta-join-text:hover {
    gap: 20px;
}

.about-us {
    width: 90%;
    margin: 15vh auto 10vh;
}

.about-us h2 {
    color: #1A1A1A;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 62px;
    /* 137.778% */
    letter-spacing: -0.939px;
    width: 40%;
}

.feature-container {
    margin: 8vh 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
}

.feature {
    width: calc(33.33% - 50px);
    /* background-color: #00BF63; */
}

.feature-icon {
    background: radial-gradient(50% 50% at 50% 50%, #FFF 0%, #34A853 100%);
    height: 54px;
    width: 54px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.feature h3 {
    color: #1A1A1A;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.361px;
    margin: 20px 0 12px;
}

.feature-description {
    color: #484848;
    font-size: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
}

.our-programs {
    margin: 20vh 0 10vh;
    width: 100%;
}

.programs-top-sect {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.green-pill {
    padding: 5px 10px;
    width: fit-content;
    border-radius: 20px;
    background-color: #00BF63;
    color: #fff;
}

.lhs-programs {}

.lhs-programs p {
    color: #FEFEFE;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
    /* 116.667% */
    letter-spacing: 0.4px;
    text-transform: uppercase;
}

.lhs-programs h2 {
    color: #1A1A1A;
    font-size: 52px;
    font-style: normal;
    font-weight: 600;
    line-height: 62px;
    /* 119.231% */
    letter-spacing: -0.939px;
}

.rhs-programs {
    width: 50%;
    color: #767676;
    font-family: 'Urbanist', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
    /* 141.667% */
    letter-spacing: -0.433px;
}

.all-programs {
    margin-top: 40px;
}

.auto-scroll-programs {
    width: 100%;
    display: flex;
    /* flex-wrap: nowrap; */
    /* white-space: nowrap; */
    overflow: hidden;
    /* position: relative; */
    gap: 20px;
    margin: 0 0 20px;
}

.program {
    height: 300px;
    min-width: 540px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    display: inline-block;
    transform-style: preserve-3d;
    cursor: pointer;
}

.program.left {
    animation: scrollLeft 40s linear infinite;
}

.program.right {
    animation: scrollRight 40s linear infinite;
}

@keyframes scrollLeft {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-300%);
    }
}

@keyframes scrollRight {
    0% {
        transform: translateX(-200%);
    }

    100% {
        transform: translateX(0);
    }
}

.program-name {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.524);
    height: 100%;
    width: 100%;
    transition: all .5s;
}
.program-name:hover {
    background-color: rgba(0, 0, 0, 0.674);
}

.program-name p:last-of-type {
    color: #fff;
    text-align: center;
    font-family: 'Poppins';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    /* width: 70%; */
    margin: 20px 0 0;
}

.program img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}
</style>