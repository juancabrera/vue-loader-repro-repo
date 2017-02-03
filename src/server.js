import Vue from "vue"
import App from "./Application.vue"

const app = new Vue(App)

export default function() {
  return new Promise((resolve) => {
    resolve(app)
  })
}
