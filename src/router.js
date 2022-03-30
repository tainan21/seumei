import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';

const routes = [
    {
        path: '/faça-seu-pedido',
        name: 'faça seu pedido',
        component: () => import('./pages/faça-seu-pedido.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/shopfriend',
        name: 'shopfriend',
        component: () => import('./components/shopfriend.vue')
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('./components/TableDemo.vue')
    },
    {
        path: '/relatorioapi',
        name: 'relatorioapi',
        component: () => import('./components/relatorioAPI.vue')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('./components/ListDemo.vue')
    },
    {
        path: '/pedidos',
        name: 'pedidos',
        component: () => import('./components/Car.vue')
    },
    {
        path: '/menuSideBar',
        name: 'menuSideBar',
        component: () => import('./components/MenuSideBar.vue')
    },
    {
        path: '/menu',
        component: () => import('./components/MenuDemo.vue'),
        children: [
            {
                path: '',
                component: () => import('./components/menu/PersonalDemo.vue')
            },
            {
                path: '/menu/seat',
                component: () => import('./components/menu/SeatDemo.vue')
            },
            {
                path: '/menu/payment',
                component: () => import('./components/menu/PaymentDemo.vue')
            },
            {
                path: '/menu/confirmation',
                component: () => import('./components/menu/ConfirmationDemo.vue')
            },
        ],
    },
    {
        path: '/chart',
        name: 'chart',
        component: () => import('./components/ChartDemo.vue')
    },
    {
        path: '/misc',
        name: 'misc',
        component: () => import('./components/MiscDemo.vue')
    },
    {
        path: '/crud',
        name: 'crud',
        component: () => import('./pages/CrudDemo.vue')
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import('./pages/TimelineDemo.vue')
    },
    {
        path: '/designCoffe',
        name: 'designCoffe',
        component: () => import('./pages/designCoffe.vue')
    },
    {
        path: '/designPerfume',
        name: 'designPerfume',
        component: () => import('./pages/designPerfume.vue')
    },
    {
        path: '/designBebida',
        name: 'designBebida',
        component: () => import('./pages/designBebida.vue')
    },
    {
        path: '/icons',
        name: 'icons',
        component: () => import('./components/IconsDemo.vue')
    },
    {
        path: '/product/:id',
        name: 'ProductDetails',
        component: () => import('./pages/Product.vue')
    },
    /*{
        path: '/product',
        name: 'product',
        component: () => import('./pages/Product.vue')
    }, */
    {
        path: '/carrinho',
        name: 'carrinho',
        component: () => import('./pages/CarBurguer.vue')
    },
    {
        path: '/landing',
        name: 'landing',
        component: () => import('./pages/LandingDemo.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue')
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue')
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue')
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('./pages/Access.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    /*  history: createWebHistory(process.env.BASE_URL), */
    routes,
});

export default router;
