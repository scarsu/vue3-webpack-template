import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/svg'
import SvgIcon from 'cmp/SvgIcon/index.vue'

const app = createApp(App)

app
  .component('svg-icon', SvgIcon)
  .use(store)
  .use(router)
  .mount('#app')
