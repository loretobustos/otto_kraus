import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firebaseApp } from './firebase/firebaseInit.js'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
    // Initialize Firebase
const firebase = firebaseApp

firebase.auth().onAuthStateChanged(function() {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})