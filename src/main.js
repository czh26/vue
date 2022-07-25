import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(ElementPlus, { zIndex: 3000, size: "" }) // 使用element-plus
  .mount("#app");
