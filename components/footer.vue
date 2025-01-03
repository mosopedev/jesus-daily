<template>
    <footer>
        <div class="top-row">
            <img src="/images/word-logo.svg" alt="" class="footer-logo">
            <div class="footer-socials">
                <NuxtLink to="/">
                    <img src="/icons/email.svg" alt="">
                </NuxtLink>
                <NuxtLink to="/">
                    <img src="/icons/instagram.svg" alt="">
                </NuxtLink>
                <NuxtLink to="/">
                    <img src="/icons/member-ln.svg" alt="">
                </NuxtLink>
                <NuxtLink to="/">
                    <img src="/icons/member-x.svg" alt="">
                </NuxtLink>
            </div>
        </div>
        <div class="mid-row">
            <NuxtLink to="/privacy-policy" class="footer-link">
                Privacy Policy
            </NuxtLink>
            <NuxtLink to="mailto:hello@figtreestudios.com?subject=Partnership%20Inquiry" class="footer-link">
                Partnerships
            </NuxtLink>
            <NuxtLink to="mailto:hello@figtreestudios.com" class="footer-link">
                Contact
            </NuxtLink>
        </div>
        <div class="bottom-row">
           <p>
            © {{ (new Date).getFullYear() }} All rights reserved
           </p> 
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
    margin-top: 30vh;
    padding: 30px 20px;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.047);
}

.top-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.top-row .footer-logo {
    width: 150px;
}
.footer-socials {
    display: flex;
    gap: 20px;
}
.footer-socials a img {
    width: 40px;
}
.mid-row {
    margin: 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mid-row a {
    margin: 0 10px 0;
    color: #00BF63;
    font-family: "ClashDisplay-Medium";
    font-weight: 500;
    font-size: 18px;
}
.bottom-row {
    margin: 20px 0 0;
}

.bottom-row p {
    text-align: center;
    font-weight: 500;
    color: #767676;
}

@media screen and (max-width: 500px) {
    footer {
        margin-top: 10vh;
    }
    .top-row {
        flex-direction: column;
        gap: 20px;
    }
    .footer-socials {
        gap: 10px;
    }
    .mid-row {
        flex-direction: column;
        gap: 10px;
    }
    .mid-row a {
        margin: 0;
        font-size: 16px;
    }
    .footer-socials a img {
        width: 30px;
    }
    .top-row .footer-logo {
        width: 120px;
    }
}
</style>