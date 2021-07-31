import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入系统配置
// import { componentSize } from './settings'

// 引入svg全局组件
import '@/assets/svg'
import SvgIcon from 'cmp/SvgIcon/index.vue'

// import ElementPlus from 'element-plus'
import {
  ElButton,
  ElRow,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus'
import '@/assets/styles/element-variables.scss'
const components = [
  ElButton,
  ElRow,
]
const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

const app = createApp(App)

components.forEach(component => app.component(component.name, component))
plugins.forEach(plugin => app.use(plugin))
app.component(SvgIcon.name, SvgIcon) // 注册svg-icon全局组件
app.use(store)
app.use(router)

app.mount('#app')
