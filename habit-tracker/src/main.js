import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* fontawesome import */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLeaf, faSquarePlus, faTrash, faSquareMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faLeaf, faSquarePlus, faTrash, faSquareMinus)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
