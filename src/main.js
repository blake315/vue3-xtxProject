

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

import { componentPlugin } from '@/components'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(componentPlugin)
app.mount('#app')

