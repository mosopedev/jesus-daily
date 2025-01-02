<template>
  <Navbar />
  <div class="whole-container">
    <div class="modal">
      <div v-if="isLoading === true" class="loader">
        <img src="/icons/loader-animation.svg" alt="">
      </div>
      <p v-if="isLoading == false && !selectedDevotional" class="no-devotional-msg">
        No devotional available for the selected date.
        <br> Please select another date.
      </p>
      <div v-if="isLoading === false && selectedDevotional" class="devotion-content">
        <p class="modal-title">Devotional Guide</p>
        <p class="selected-date">Date: {{ new Date(selectedDevotional.allotedDate).toDateString() }}</p>

        <div class="devotional-info">
          <div class="dev-info-txt-grp">
            <p class="label">Bible Verse</p>
            <p class="devotional-text">{{ selectedDevotional.bibleVerse }}</p>
          </div>
          <div class="dev-info-txt-grp">
            <p class="label">Bible Text</p>
            <p class="devotional-text">
              {{ selectedDevotional.bibleText }}
            </p>
          </div>
          <div class="dev-info-txt-grp">
            <p class="label">Description</p>
            <p class="devotional-text">
              {{ selectedDevotional.description }}
            </p>
          </div>
        </div>

      </div>

      <div v-if="isLoading === false" class="calendar-picker">
        <div class="calendar-top">
          <p>Select a Date</p>

          <div class="controls">
            <select v-model="selectedYear" @change="generateCalendar" class="picker">
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
            <select v-model="selectedMonth" @change="generateCalendar" class="picker">
              <option v-for="(month, index) in months" :key="index" :value="index">{{ month }}</option>
            </select>
          </div>
        </div>

        <div class="devotional-schedule">
          <div class="day-name" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
          <div class="day-circle" v-for="(day, index) in calendarDays" :key="index"
            :class="{ empty: day === null, selected: day === selectedDay, reserved: findDevotionalByDate(day) == true }"
            @click="updateSelectedDay(day)">
            {{ day || '' }}
            <p>
            </p>
          </div>
        </div>

        <div class="calendar-bottom">
          <div class="legend">
            <p>
              <span class="day-circle"></span>
              Available
            </p>
            <p>
              <span class="day-circle selected"></span>
              Selected
            </p>
            <p>
              <span class="day-circle reserved"></span>
              Reserved
            </p>
          </div>
          <button v-if="selectedDevotional" @click="selectedDay != null ? showReserverModal = true : ''">
            Continue
          </button>
        </div>

        <div class="reserver-info-modal" :class="{ show: showReserverModal === true }"
          @click="showReserverModal = false">
          <div class="reserver-modal" @click.stop>
            <div class="reserver-modal-top">
              <p>Enter your details.</p>
              <p>We won't spam you. we promise ;)</p>
            </div>

            <form @submit.prevent="reserveDevotional">
              <div class="reserver-inpt-grp">
                <label class="label">Firstname</label>
                <input v-model="reserverFirstname" type="text" required>
              </div>
              <div class="reserver-inpt-grp">
                <label class="label">Lastname</label>
                <input v-model="reserverLastname" type="text" required>
              </div>
              <div class="reserver-inpt-grp">
                <label class="label">Email</label>
                <input v-model="reserverEmail" type="email" required>
              </div>
              <label>
                <input v-model="saveReserverDetails" type="checkbox"> Remember me
              </label>
              <div>
                <button type="submit" class="reserve-btn">
                  Reserve
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
import axios from 'axios';

const reserverFirstname = typeof window !== 'undefined' ? ref(localStorage.getItem('reserverFirstname')) : ref('')
const reserverLastname = typeof window !== 'undefined' ? ref(localStorage.getItem('reserverLastname')) : ref('')
const reserverEmail = typeof window !== 'undefined' ? ref(localStorage.getItem('reserverEmail')) : ref('')
const saveReserverDetails = ref(false)

const isLoading = ref(true);
const selectedDevotional = ref(null);
let devotionals = []

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => currentYear + i); // Last 5 and next 5 years

const selectedYear = ref(currentYear);
const selectedMonth = ref(new Date().getMonth());
const selectedDay = ref(new Date().getDate())

const calendarDays = ref([]);

const showReserverModal = ref(false)

const generateCalendar = async () => {
  const year = selectedYear.value;
  const month = selectedMonth.value;
  isLoading.value = true;

  // Get the number of days in the selected month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Find the first day of the month
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // Prepare days array
  const days = Array(firstDayOfWeek).fill(null); // Empty slots for the first row
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Fill trailing empty slots for alignment
  while (days.length % 7 !== 0) {
    days.push(null);
  }

  try {
    const response = await axios.get(`http://localhost:4002/api/devotional/${year}/${month + 1}`);
    devotionals = response.data.data || [];
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.error('Error fetching devotional:', error);
  }

  calendarDays.value = days;
};

// Generate the calendar on page load
await generateCalendar();

const findDevotionalByDate = (day) => {
  if (day == null) return null;

  const targetDate = `${selectedYear.value}-${String(selectedMonth.value + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const foundDevotional = devotionals.find(dev => dev.allotedDate.startsWith(targetDate));
  // console.log(foundDevotional)
  // console.log('Selected Devotional:', selectedDevotional.value);
  return foundDevotional ? foundDevotional.isReserved : null;
  // return foundDevotional?.isReserved || false;
}


const updateSelectedDay = (day) => {
  if (day == null) return null;

  const isReserved = findDevotionalByDate(day)
  if (isReserved) return null;

  selectedDay.value = day;

  const targetDate = `${selectedYear.value}-${String(selectedMonth.value + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const foundDevotional = devotionals.find(dev => dev.allotedDate.startsWith(targetDate));
  selectedDevotional.value = foundDevotional;
  selectedDevotional.value = foundDevotional
}

updateSelectedDay(selectedDay.value)

const reserveDevotional = async () => {
  try {
    const response = await axios.post('http://localhost:4002/api/devotional/reserve', {
      devotionalId: selectedDevotional.value._id,
      firstname: reserverFirstname.value,
      lastname: reserverLastname.value,
      email: reserverEmail.value,
    });

    if (response.data.success) {
      if (saveReserverDetails.value) {
        localStorage.setItem('reserverFirstname', reserverFirstname.value);
        localStorage.setItem('reserverLastname', reserverLastname.value);
        localStorage.setItem('reserverEmail', reserverEmail.value);
      }
      alert('Devotional reserved successfully!');
      await generateCalendar();
      showReserverModal.value = false;
    } else {
      alert('Failed to reserve devotional.');
    }
  } catch (error) {
    console.log('Error reserving devotional:', error);
  }
}
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
  height: 90vh;
  background-color: #00bf63;
}

.modal {
  width: 70%;
  padding: 20px;
  min-height: 70vh;
  height: fit-content;
  background: white;
  border-radius: 10px;
  /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.105) */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
}

.no-devotional-msg {
  font-family: "Poppins";
  font-size: 20px;
  color: #000;
  width: 40%;
  margin: auto;
  text-align: center;
}

.selected-date {
  font-family: "Poppins";
  color: #767676;
}

.devotion-content {
  width: 40%;
  border-right: 1px solid lightgray;
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
  /* background-color: rebeccapurple; */
  flex: 1;
  /* width: 80%; */
  /* height: 80vh; */
  position: relative;
  overflow: hidden;
}

.calendar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  /* margin: auto;  */
  margin: 5vh auto 0;
}

.calendar-top p {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins";
}

.picker {
  /* padding: 10px; */
  border-radius: 10px;
  border: 2px solid #00bf63;
  width: fit-content;
  /* color: #00bf63; */
  appearance: none;
  /* Remove default arrow */
  -webkit-appearance: none;
  /* Remove default arrow for Safari */
  -moz-appearance: none;
  /* Remove default arrow for Firefox */
  padding: 10px 30px 10px 10px;
  /* Add space for the arrow */
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>') no-repeat right 10px center;
  background-size: 16px 16px;
}

.devotional-schedule {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;
  width: 80%;
  margin: 5vh auto 0;
  text-align: center;
}

.day-name {
  /* font-weight: bold; */
  /* text-align: center; */
  font-family: "ClashDisplay-Medium";
  text-align: left;
}

.day-circle {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: whitesmoke;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  font-family: "Poppins";
}

.day-circle.empty {
  background-color: rgba(245, 245, 245, 0.565);
  cursor: not-allowed;
}

.day-circle.selected {
  background-color: #00bf636e;
}

.day-circle.reserved {
  background-color: #00bf63;
  cursor: not-allowed;
}

.calendar-bottom {
  width: 80%;
  margin: 8vh auto 0;
  /* display: flex; */
  /* justify-content: space-between;
  align-items: center; */
  /* background-color: rebeccapurple; */
}

.calendar-bottom .legend {
  display: flex;
  gap: 20px;
}

.calendar-bottom .legend p {
  display: flex;
  gap: 10px;
  font-family: "Poppins";
  font-size: 14px;
}

.calendar-bottom .legend .day-circle {
  width: 20px;
  height: 20px;
}

.calendar-bottom button {
  float: right;
  background: #016434;
  color: #fff;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin: 3vh 0;
}

.reserver-info-modal {
  background: #00bf63e7;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: -999px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  margin: auto;
}

.reserver-info-modal.show {
  right: 0;
}

.reserver-inpt-grp {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.reserver-inpt-grp label {
  font-size: 16px;
  font-family: "Poppins";
  color: #000;
  font-weight: 600;
}

.reserver-inpt-grp input {
  height: 50px;
  width: 100%;
  margin-top: 5px;
  border-radius: 8px;
  padding-left: 10px;
  font-size: 16px;
  border: 1px solid lightgray;
}

.reserver-modal {
  background: #fff;
  height: fit-content;
  padding: 30px 20px;
  width: 70%;
  border-radius: 10px;
}

.reserver-modal-top {
  margin-bottom: 20px;
}

.reserver-modal p:first-of-type {
  font-size: 18px;
  font-family: "ClashDisplay-Medium";
}

.reserver-modal p:last-of-type {
  font-size: 12px;
  font-family: "Poppins";
}

.reserve-btn {
  float: right;
  background: #016434;
  color: #fff;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin: 3vh 0;
}
</style>
