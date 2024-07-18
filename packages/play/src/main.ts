import { createApp } from 'vue'
import XElement from 'x-ui'
import App from './App.vue'

import '@x-ui/theme/index.scss'

createApp(App)
  .use(XElement)
  .mount('#app')
