// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import "bootstrap";

import App from "./App";
import router from "./router";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.component("Loading", VueLoading);

axios.defaults.withCredentials = true;

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log("這裡需要驗證");
    const api = `${process.env.API_PATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: "/login",
        });
      }
    });
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
