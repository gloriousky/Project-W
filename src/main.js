import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router";
import { store } from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'

const app = createApp(App);
app.use(VueAxios, axios)
app.use(router);
app.use(store)

app.provide("axios", app.config.globalProperties.axios); // provide 'axios'
app.mount("#app");


