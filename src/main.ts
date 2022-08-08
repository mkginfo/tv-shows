import { createApp } from "vue";
import { createPinia } from "pinia";
//importing bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "jquery/dist/jquery.min";


import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");