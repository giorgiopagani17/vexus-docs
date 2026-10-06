import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/style.scss'
import i18n from './i18n'
import { directive as clickAway } from 'vue3-click-away'
import { createApiClient } from 'vexus'

const app = createApp(App)

app.directive('click-away', clickAway)

app.use(createApiClient({
  baseUrl: 'https://dummyjson.com/',
  getAccessToken: () => null,
  getRefreshToken: () => null,
}))

app
  .use(router)
  .use(i18n)
  .mount('#app')