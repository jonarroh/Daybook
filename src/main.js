import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import router from './router';

import './style/styles.scss';

const app = createApp(App).use(store).use(router).mount('#app');
