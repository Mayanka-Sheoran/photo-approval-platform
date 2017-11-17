import Vue from 'vue';
import Router from 'vue-router';
import Header from '../components/Header';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Gallery from '../components/Gallery';
import Login from '../components/Login'

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
      },
       {
        path: 'gallery',
        component: Gallery
      },{
        path: 'login',
        component: Login
      }]
    },
  ],
});
