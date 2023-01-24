import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BottomSection from './components/ui/bottom-section/bottom-section.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('BottomSection', BottomSection)

app.mount('#app')
