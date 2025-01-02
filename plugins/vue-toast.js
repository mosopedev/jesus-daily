import {createApp} from 'vue';
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp({});
app.use(ToastPlugin);
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ToastPlugin);
});