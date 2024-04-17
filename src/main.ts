import { createApp } from 'vue'
import router from "./router/index";
import App from './App.vue'
import "./assets/styles/app.css";
import { useStoradData } from "./composables/data-compiler";

const app = createApp(App)

app.provide('storadData', useStoradData());
app.use(router);
app.mount('#app')
