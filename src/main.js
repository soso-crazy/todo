import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
import 'font-awesome/css/font-awesome.css';
import 'lib-flexible/flexible';

new Vue({
    el:'#app',
    router,
    store,
    template:"<App />",
    components:{
        App
    }
})