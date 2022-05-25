import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./locale";
import vuetify from "./plugins/vuetify";

//custom scss
import "@/assets/scss/all.scss";

//api
import api from "@/api";
Vue.prototype.$http = api;
Vue.prototype.$eventBus = new Vue()

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
