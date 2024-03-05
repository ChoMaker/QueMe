import "./assets/main.css";

import "./assets/main.css";
import { createApp, ref, onMounted } from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createApp(App).use(router).mount("#app");