<template>
    <div class="faq-container">
        <h2>FAQs</h2>

        <div class="faqs">
            <div class="q-box" @click="activeHover = 'q1'" data-aos="fade-up">
                <div class="question-contain">
                    <p class="question">What is Figtree Studios? </p>
                    <img src="/icons/angle-arrow.svg" :class="[activeHover == 'q1' ? 'opened' : 'closed']" alt="">
                </div>
                <p v-if="activeHover == 'q1'" class="answer">
                    Figtree Studios is a creative media organisation dedicated to producing high-quality, faith-based
                    content that amplifies God’s love and Christian values for audiences worldwide.
                </p>
            </div>
            <div class="q-box" @click="activeHover = 'q2'" data-aos="fade-up">
                <div class="question-contain">
                    <p class="question">
                        Where is Figtree Studios located?
                    </p>
                    <img src="/icons/angle-arrow.svg" :class="[activeHover == 'q2' ? 'opened' : 'closed']" alt="">
                </div>
                <p v-if="activeHover == 'q2'" class="answer">
                    We are a global ministry with contributors and content creators from various parts of the world,
                    working together to share God’s Word creatively. However, our primary Office is based in Canada.
                </p>
            </div>
            <div class="q-box" @click="activeHover = 'q3'" data-aos="fade-up">
                <div class="question-contain">
                    <p class="question">
                        Can I submit a story or idea for your projects?
                    </p>
                    <img src="/icons/angle-arrow.svg" :class="[activeHover == 'q3' ? 'opened' : 'closed']" alt="">
                </div>
                <p v-if="activeHover == 'q3'" class="answer">
                    Yes, we’re always open to exploring new ideas and collaboration opportunities that align with our
                    mission. Feel free to reach out through our website or social platforms with your submission.
                </p>
            </div>
            <div class="q-box" @click="activeHover = 'q4'" data-aos="fade-up">
                <div class="question-contain">
                    <p class="question">
                        How can I stay updated on new releases from Figtree Studios?
                    </p>
                    <img src="/icons/angle-arrow.svg" :class="[activeHover == 'q4' ? 'opened' : 'closed']" alt="">
                </div>
                <p v-if="activeHover == 'q4'" class="answer">
                    You can subscribe to our newsletter or follow us on social media for updates on new devotionals,
                    podcast episodes, and film releases.
                </p>
            </div>
            <div class="q-box" @click="activeHover = 'q5'" data-aos="fade-up">
                <div class="question-contain">
                    <p class="question">
                        Do you offer your content in multiple languages?
                    </p>
                    <img src="/icons/angle-arrow.svg" :class="[activeHover == 'q5' ? 'opened' : 'closed']" alt="">
                </div>
                <p v-if="activeHover == 'q5'" class="answer">
                    We strive to make our content accessible to a global audience. While some programs are available in
                    multiple languages, we are continually expanding our translations, including translated captions and
                    dubs.
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
    width: 60%;
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
    background-color: whitesmoke;
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
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    cursor: pointer;
}

.answer {
    color: #1A1A1A;
    font-size: 18px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    border-top: 1px solid #767a77;
    margin-top: 10px;
    padding: 25px 5px 5px;
}

@media screen and (max-width: 900px) {
    .faq-container {
        width: 90%;
    }

    .question {
        font-size: 25px;
    }

    .answer {
        font-size: 18px;
    }

    .faq-container h2 {
        font-size: 45px;
    }
}

@media screen and (max-width: 500px) {
    .question {
        font-size: 18px;
    }

    .answer {
        font-size: 15px;
    }

    .faq-container h2 {
        font-size: 30px;
    }
}
</style>