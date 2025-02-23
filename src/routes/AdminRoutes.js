import FeaturesRoutes from './FeaturesRoutes';
import PageRoutes from './PageRoutes';
import Components from './Components';
import Apps from './Applications';

const routes = [
  {
    path: '',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/view/dashboard/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '@/view/dashboard'),
      },
      {
        path: 'business',
        name: 'business',
        component: () => import(/* webpackChunkName: "Business" */ '@/view/dashboard/Business.vue'),
      },
      {
        path: 'eco',
        name: 'eco',
        component: () => import(/* webpackChunkName: "Business" */ '@/view/dashboard/Ecommerce.vue'),
      },
      {
        path: 'performance',
        name: 'performance',
        component: () => import(/* webpackChunkName: "Performance" */ '@/view/dashboard/Performance.vue'),
      },
      {
        path: 'crm',
        name: 'crm',
        component: () => import(/* webpackChunkName: "CRM" */ '@/view/dashboard/CRM.vue'),
      },
      {
        path: 'sales',
        name: 'sales',
        component: () => import(/* webpackChunkName: "sales" */ '@/view/dashboard/Sales.vue'),
      },
    ],
  },
  {
    path: '/crud',
    name: 'axios',
    component: () => import(/* webpackChunkName: "axios" */ '@/view/crud/axios/Index.vue'),
    children: [
      {
        path: 'axios-view',
        name: 'axios-view',
        component: () => import(/* webpackChunkName: "axios-view" */ '@/view/crud/axios/View.vue'),
      },
      {
        path: 'axios-edit/:id',
        name: 'axios-edit',
        component: () => import(/* webpackChunkName: "axios-edit" */ '@/view/crud/axios/edit.vue'),
      },
      {
        path: 'axios-add',
        name: 'axios-add',
        component: () => import(/* webpackChunkName: "axios-add" */ '@/view/crud/axios/addNew.vue'),
      },
    ],
  },
  {
    path: '/crud',
    name: 'fireStore',
    component: () => import(/* webpackChunkName: "fireStore" */ '@/view/crud/fireStore/Index.vue'),
    children: [
      {
        path: 'fireStore-view',
        name: 'fireStore-view',
        component: () => import(/* webpackChunkName: "fireStore-view" */ '@/view/crud/fireStore/View.vue'),
      },
      {
        path: 'fireStore-edit/:id',
        name: 'fireStore-edit',
        component: () => import(/* webpackChunkName: "fireStore-edit" */ '@/view/crud/fireStore/edit.vue'),
      },
      {
        path: 'fireStore-add',
        name: 'fireStore-add',
        component: () => import(/* webpackChunkName: "fireStore-add" */ '@/view/crud/fireStore/addNew.vue'),
      },
    ],
  },
  ...PageRoutes,
  ...FeaturesRoutes,
  ...Components,
  ...Apps,
];

export default routes;
