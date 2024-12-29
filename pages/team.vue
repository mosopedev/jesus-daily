<!-- <template>
    <Navbar />
    <h1 class="title">Meet The Team</h1>
    <p class="title-desc">
        We’re a diverse, close-knit team on an adventure to build the world's most vibrant tech community, while learning something new, every day.
    </p>
    <div class="team-container">
        <div class="member">
            <img src="/images/team/1.png" alt="" class="member-img">
            <div class="member-info">
                <p class="member-name">
                    Adeyemi Mosope
                </p>
                <p class="member-role">
                    Founder
                </p>
                <div class="member-social">
                    <NuxtLink to="https://www.linkedin.com/in/mosope-adeyemi/">
                        <img src="/icons/member-ln.svg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/icons/member-x.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="member">
            <img src="/images/team/3.png" alt="" class="member-img">
            <div class="member-info">
                <p class="member-name">
                    Samuel Wilson
                </p>
                <p class="member-role">
                    Backend Trybe Mentor
                </p>
                <div class="member-social">
                    <NuxtLink to="/">
                        <img src="/icons/member-ln.svg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/icons/member-x.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="member">
            <img src="/images/team/4.png" alt="" class="member-img">
            <div class="member-info">
                <p class="member-name">
                    Samuel Wilson
                </p>
                <p class="member-role">
                    ML Trybe Mentor
                </p>
                <div class="member-social">
                    <NuxtLink to="/">
                        <img src="/icons/member-ln.svg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/icons/member-x.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="member">
            <img src="/images/team/5.png" alt="" class="member-img">
            <div class="member-info">
                <p class="member-name">
                    Samuel Wilson
                </p>
                <p class="member-role">
                    Cloud Eng. Trybe Mentor
                </p>
                <div class="member-social">
                    <NuxtLink to="/">
                        <img src="/icons/member-ln.svg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/icons/member-x.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="member">
            <img src="/images/team/6.png" alt="" class="member-img">
            <div class="member-info">
                <p class="member-name">
                    Samuel Wilson
                </p>
                <p class="member-role">
                    Head of Content Studio
                </p>
                <div class="member-social">
                    <NuxtLink to="/">
                        <img src="/icons/member-ln.svg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/icons/member-x.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="member">
            <img src="/images/team/7.png" alt="" class="member-img">
            <div class="member-info">
                <p class="member-name">
                    Samuel Wilson
                </p>
                <p class="member-role">
                    Head of Partnerships
                </p>
                <div class="member-social">
                    <NuxtLink to="/">
                        <img src="/icons/member-ln.svg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/icons/member-x.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="member">
            <img src="/images/team/8.png" alt="" class="member-img">
            <div class="member-info">
                <p class="member-name">
                    Samuel Wilson
                </p>
                <p class="member-role">
                    Community Manager
                </p>
                <div class="member-social">
                    <NuxtLink to="/">
                        <img src="/icons/member-ln.svg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/icons/member-x.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="member">
            <img src="/images/team/9.png" alt="" class="member-img">
            <div class="member-info">
                <p class="member-name">
                    Samuel Wilson
                </p>
                <p class="member-role">
                    Robotics Trybe Mentor
                </p>
                <div class="member-social">
                    <NuxtLink to="/">
                        <img src="/icons/member-ln.svg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/icons/member-x.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="member">
            <img src="/images/team/10.png" alt="" class="member-img">
            <div class="member-info">
                <p class="member-name">
                    Samuel Wilson
                </p>
                <p class="member-role">
                    Trybe Mentor
                </p>
                <div class="member-social">
                    <NuxtLink to="/">
                        <img src="/icons/member-ln.svg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/icons/member-x.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <SupportCta />
    <Footer />
</template>

<script setup>

</script>

<style scoped>
.title {
    color:  #1A1A1A;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 74px;
    letter-spacing: -1.156px;
    margin: 5vh auto 0;
}
.title-desc {
    width: 70%;
    color: #767676;
    text-align: center;
    font-family: "Urbanist";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    margin: 5vh auto 40px;
}
.team-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    margin: 5vh auto;
}

.member {
    /* background-color: rebeccapurple; */
    margin: 50px 0 0;
}

.member .member-img {
    height: 250px;
    width: 250px;
}

.member-info {
    margin: 10px 0;
    text-align: center;
}

.member-name {
    font-size: 24px;
    color: #1A1A1A;
    font-weight: 600;
    font-family: 'poppins';
}
.member-role {
    margin-top: 10px;
    font-size: 20px;
    color: #767676;
    font-weight: 500;
}
.member-social {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.member-social a {
    margin: 0 5px 0;
}
.member-social a img {
    width: 35px;
}
</style> -->


<template>
    <div>

    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>