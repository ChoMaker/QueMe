import "./assets/main.css";

import "./assets/main.css";
import { createApp, ref, onMounted } from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {registerLicense} from '@syncfusion/ej2-base'
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0xwWmFZfVpgcl9FY1ZUQGYuP1ZhSXxXdkFjX39Yc3dQQ2FfVkU="
);

createApp(App).use(router).mount("#app");