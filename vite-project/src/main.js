

import { createApp } from 'vue'
import App from './components/appB/App.vue'
import uiComponent from './components/ui-component'
const app = createApp(App)
uiComponent.map(component => app.component(component.name, component))
app.mount('#app') 
