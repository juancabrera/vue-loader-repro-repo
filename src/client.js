import Vue from "vue"
import App from "./Application.vue"

const VueApp = Vue.extend(App)
const app = new VueApp({  // eslint-disable-line no-unused-vars
  el: ".app",
})
