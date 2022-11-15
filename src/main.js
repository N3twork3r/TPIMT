import { createApp } from 'vue'  // pour preciser point d'entrée principal
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router' // pour que l'appli connaisse les routes

createApp(App).use(router).mount('#app') // pour initialiser le projet on crée une appli view js avec le fichier app.view, on precise que utilise le routeur et qu'on le charge dans #app ( element ID = app >app.vue)