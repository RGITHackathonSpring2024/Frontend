import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/index.css"

import App from './App.vue'
import router from './router'

import {  library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 


library.add(fas)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.component('fa',FontAwesomeIcon)