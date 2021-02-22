// Modules
import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import store from './store';
import router from './router';

// Components
import App from './containers/App.vue';

// Styles
import 'vue-tel-input/dist/vue-tel-input.css';
import './assets/styles/index.css';

Vue.use(VueTelInput);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
