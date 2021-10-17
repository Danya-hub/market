import {
    createApp
} from 'vue';
import App from './app';
import components from '@/components/UI/index';

import '@/style/color.css';
import '@/style/compute.css';

const Vue = createApp(App);
components.forEach(comp => Vue.component(comp.name, comp)); 
Vue.mount('#app');