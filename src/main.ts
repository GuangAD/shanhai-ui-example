import { createApp } from 'vue'
import App from './App.vue'
import ShaiHaiUI from 'shanhai-ui'
const app = createApp(App)
app.use(ShaiHaiUI)
app.config.globalProperties.$require = (url: string): string => {
  return new URL(url, import.meta.url).href
}
app.mount('#app')
