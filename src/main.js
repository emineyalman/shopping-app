import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "@/assets/style.css";
import { appAxios } from './utils/appAxios'


loadFonts();

const app = createApp(App);

app.config.globalProperties.$appAxios = appAxios;

app
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app');