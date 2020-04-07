import Vue from 'vue';
import Router from 'vue-router';
import ItemList from '@/views/ItemList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/:status?',
    name: 'item-list',
    component: ItemList,
  }],
});


