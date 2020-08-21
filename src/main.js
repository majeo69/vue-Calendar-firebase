import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyD9q8CVnC5fM2EcBeD7O_ubQx44ZQVgzLc",
    authDomain: "vue-calender-a0883.firebaseapp.com",
    databaseURL: "https://vue-calender-a0883.firebaseio.com",
    projectId: "vue-calender-a0883",
    storageBucket: "vue-calender-a0883.appspot.com",
    messagingSenderId: "89478819565",
    appId: "1:89478819565:web:6979112767036f7eb5a6e4",
    measurementId: "G-0V7JLPLN6W"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
