<template>
    <div class="faq-container">
        <h2>FAQs</h2>

        <div class="faqs">
            <div class="q-box" @click="activeHover = 'q1'" data-aos="fade-up">
                <div class="question-contain" >
                    <p class="question"> How do i become a member ? </p> 
                    <img src="/icons/angle-arrow.svg" :class="[activeHover == 'q1' ? 'opened' : 'closed']" alt="">
                </div>
                <p v-if="activeHover == 'q1'" class="answer">
                    Becoming a community member is absolutely free, click the "Become a member" button to join the community.
                </p>
            </div>
            <div class="q-box" @click="activeHover = 'q2'" data-aos="fade-up">
                <div class="question-contain">
                    <p class="question">
                        How do i become a member ?
                    </p> 
                    <img src="/icons/angle-arrow.svg" :class="[activeHover == 'q2' ? 'opened' : 'closed']" alt="">
                </div>
                <p v-if="activeHover == 'q2'" class="answer">
                    Becoming a community member is absolutely free, click the "Become a member" button to join the community. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores at amet veniam odio officia nam eos nisi quas laborum repellat. Voluptate, saepe ipsum.
                </p>
            </div>
            <div class="q-box" @click="activeHover = 'q3'" data-aos="fade-up">
                <div class="question-contain">
                    <p class="question">
                        How do i become a member ?
                    </p> 
                    <img src="/icons/angle-arrow.svg" :class="[activeHover == 'q3' ? 'opened' : 'closed']" alt="">
                </div>
                <p v-if="activeHover == 'q3'" class="answer">
                    Becoming a community member is absolutely free, click the "Become a member" button to join the community. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores at amet veniam odio officia nam eos nisi quas laborum repellat. Voluptate, saepe ipsum.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const activeHover = ref("q1");
</script>

<style scoped>
.faq-container {
    width: 90%;
    margin: 20vh auto 10vh;
    /* background-color: rebeccapurple; */
}
.faq-container h2 {
    color: #1A1A1A;
    font-size: 52px;
    font-style: normal;
    font-weight: 600;
    line-height: 62px;
    /* 119.231% */
    letter-spacing: -0.939px;
}
.faqs {
    margin: 60px 0 0;
    width: 100%;
}
.q-box {
    border-radius: 24px;
    /* border: 1px solid #AEB2AF; */
    height: fit-content;
    transition: all .5s;
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.052), 
                  0 -4px 8px rgba(0, 0, 0, 0.052),
                  4px 0 8px rgba(0, 0, 0, 0.052),
                  -4px 0 8px rgba(0, 0, 0, 0.052);
}
.q-box:hover {
    background-color: rgb(246, 245, 245);
}
.question-contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.question-contain img {
    transition: all .5s;
}
.question-contain img.opened {
    transform: rotate(180deg);
}
.question {
    color: #000;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    cursor: pointer;
}
.answer {
    color: #767a77;
    font-size: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    border-top: 1px solid #767a77;
    margin-top: 10px;
    padding: 25px 5px 5px;
}
</style>