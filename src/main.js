import Vue from "vue";
import App from "./App";
import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';

Vue.use(FlagIcon);
Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
