<template>
    <Navbar />
    <div class="whole-container">
        <div class="modal">
            <div v-if="isLoading" class="loader">
                <img src="/icons/loader-animation.svg"alt="">
            </div>
            <p v-if="!isLoading && devotional === null" class="message">
                No devotional found for this date.
            </p>
            <div v-if="devotional" class="devotion-content">
                <p class="modal-title">Devotional Guide</p>
                <p class="selected-date">Date: {{ new Date(devotional.allotedDate).toDateString() }}</p>

                <div class="devotional-info">
                    <div class="dev-info-txt-grp">
                        <p class="label">Bible Verse</p>
                        <p class="devotional-text">{{ devotional.bibleVerse }}</p>
                    </div>
                    <div class="dev-info-txt-grp">
                        <p class="label">Bible Text</p>
                        <p class="devotional-text">
                            {{ devotional.bibleText }}
                        </p>
                    </div>
                    <div class="dev-info-txt-grp">
                        <p class="label">Description</p>
                        <p class="devotional-text">
                            {{ devotional.description }}
                        </p>
                    </div>
                </div>
            </div>

            <div v-if="devotional && devotional.approved == false" class="calendar-picker">
                <div class="calendar-top">
                    <p>Upload your devotional video</p>
                </div>

                <div class="reservation-upload">
                    <div class="upload-container">
                        <div v-if="!files.length" class="drop-zone" @dragover.prevent @drop.prevent="handleDrop">
                            <p>Drag & Drop the file here</p>
                            <p>or</p>
                            <input type="file" id="fileInput" class="file-input" @change="handleFileSelect" hidden />
                            <button @click="triggerFileInput">Choose File</button>
                        </div>
                        <ul v-if="files.length">
                            <li v-for="(file, index) in files" :key="index">{{ file.name }}</li>
                        </ul>
                        <button v-if="files.length" @click="uploadVideo">Upload Video</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const $toast = useToast();

const devotional = ref(null);
const route = useRoute();
const reservationId = route.params.reservationId;
const isLoading = ref(true);

onMounted(async () => {
    try {
        const response = await axios.get(`https://jesus-daily-api.onrender.com/api/devotional/${reservationId}`);
        console.log('Devotional:', response.data);
        devotional.value = response.data.data;
        isLoading.value = false;

        console.log('Devotional:', devotional.value);

        if (devotional.value.approved) {
            $toast.open({
                message: 'This devotional has already been approved.',
                type: 'info',
                position: 'top-right',
                duration: 5000,
                dismissible: true,
                onDismiss: () => {
                    window.location.href = '/jesus-daily/reservation';
                },
            });
        }
    } catch (error) {
        isLoading.value = false;
        $toast.open({
                message: error.response.data.errors || 'An error occurred. Please try again later.',
                type: 'error',
                position: 'top-right',
                duration: 5000,
                dismissible: true,
                onDismiss: () => {
                    window.location.href = '/jesus-daily/reservation';
                },
            });
        console.error('Error fetching devotional:', error);
    }
});
definePageMeta({
    title: "Jesus Daily",
    meta: [
        {
            name: "description",
            content: "Daily inspiration and teachings from Jesus",
        },
    ],
});

import { ref } from 'vue';
import { tr } from 'vuetify/locale';
const files = ref([]);

const handleDrop = (event) => {
  files.value = [...event.dataTransfer.files];
};

const handleFileSelect = (event) => {
  files.value = [...event.target.files];
};

const triggerFileInput = () => {
  document.getElementById('fileInput').click();
};

const uploadVideo = async () => {
    if (files.value.length !== 1) {
        alert('Please upload exactly one video file.');
        return;
    }

    const formData = new FormData();
    formData.append('video', files.value[0]);
    formData.append('devotionalId', reservationId);

    try {
        const response = await axios.post('https://jesus-daily-api.onrender.com/api/devotional/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Upload successful:', response.data);
        $toast.open({
            message: 'Video uploaded successfully!',
            type: 'success',
            position: 'top-right',
        });
        window.location.reload();
    } catch (error) {
        console.error('Error uploading video:', error);
        $toast.open({
            message: error.response.data.errors || 'Failed to upload video.',
            type: 'error',
            position: 'top-right',
        });
    }
};
</script>

<style scoped>
h1 {
    color: #333;
    text-align: center;
    margin-top: 20px;
}

.whole-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 90vh;
    background-color: #00bf63;
}

.modal {
    width: 70%;
    padding: 20px;
    min-height: 70vh;
    height: fit-content;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
}

.selected-date {
    font-family: "Poppins";
    color: #767676;
}

.devotion-content {
    width: 60%;
    /* border-right: 1px solid lightgray; */
    min-height: 100%;
    overflow-y: auto;
}

.controls {
    display: flex;
    gap: 10px;
}

.devotion-content::-webkit-scrollbar {
    display: block;
}

.modal-title {
    font-size: 25px;
    font-family: "ClashDisplay-Medium";
}

.devotional-info {
    margin-top: 4vh;
}

.dev-info-txt-grp {
    margin-top: 2vh;
    width: 90%;
}

.dev-info-txt-grp .label {
    font-size: 16px;
    font-family: "Poppins";
    color: #000;
    font-weight: 600;
}

.dev-info-txt-grp .devotional-text {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    color: #767676;
}

.calendar-picker {
    flex: 1;
    position: relative;
    overflow: hidden;
}

.calendar-top {
    width: 80%;
    text-align: center;
    margin: auto;
}

.calendar-top p {
    color: #000;
    font-size: 18px;
    font-weight: 500;
    font-family: "Poppins";
}

.upload-container {
  text-align: center;
  width: 80%;
  margin: 2vh auto;
}

.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
}

.drop-zone p {
    font-family: "ClashDisplay-Medium";
    font-size: 16px;
}

.drop-zone:hover {
  border-color: #00bf63;
}

button {
  /* margin-top: 30px;
  padding: 8px 16px;
  border: none;
  background-color: #00bf63;
  color: white;
  border-radius: 4px;
  cursor: pointer; */

  /* float: right; */
  background: #016434;
  color: #fff;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  /* margin: 3vh 0; */
}

button:hover {
  background-color: #016434;
}

.file-input {
  display: none;
}

ul {
  margin-top: 10px;
  list-style: none;
  padding: 0;
}

@media screen and (max-width: 1200px) {
  .modal {
    /* flex-direction: column; */
    width: 90%;
  }
}


@media screen and (max-width: 900px) {
  .modal {
    flex-direction: column;
    height: fit-content;
    margin: 5vh 0;
    padding: 10px;
  }
  .no-devotional-msg {
    width: 100%;
    font-size: 16px;
  }
  .devotion-content {
  width: 90%;
  border-right: none;
  margin: auto;
}

.calendar-top {
  width: 90%;
  /* margin: auto;  */
  margin: 5vh auto 0;
}
}

@media screen and (max-width: 600px) {
  .modal {
    /* flex-direction: column; */
    width: 95%;
  }
  .devotional-schedule {
  gap: 10px;
  width: 100%;
}
.devotion-content {
  width: 100%;
}
.calendar-top {
  width: 100%;
  flex-direction: column;
  gap: 20px;
}

.reserver-modal {
  width: 90%;
}

.calendar-bottom {
  width: 100%;
}

.calendar-bottom .legend {
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 15px;
}
}
</style>