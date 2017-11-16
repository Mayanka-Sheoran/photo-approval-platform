import Vue from 'vue';
import Router from 'vue-router';
import Header from '../components/Header';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
      children: [
      {
        path: 'one',
        component: One
      },
      {
        path: 'two',
        component: Two
      },
       {
        path: 'three',
        component: Three
      }]
    },
  ],
});
