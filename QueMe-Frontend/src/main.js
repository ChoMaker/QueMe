import "./assets/main.css";

import "./assets/main.css";
import { createApp, ref, onMounted } from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {registerLicense} from '@syncfusion/ej2-base'
registerLicense("Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhNYVZpR2Nbe051flRCalxRVAciSV9jS3pTdUVlWXpfdHRUR2ddVg==")

createApp(App).use(router).mount("#app");