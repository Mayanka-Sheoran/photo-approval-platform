import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import One from '../components/One';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
      {
        path: 'one',
        component: One
      }]
    },
  ],
});
