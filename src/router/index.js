import { createRouter, createWebHistory } from 'vue-router';
import daybookRoter from '@/modules/daybook/router';
import authRoter from '@/modules/auth/router';
import isAuthenticated from './auth-guard';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/About.vue')
	},
	{
		path: '/daybook',
		beforeEnter: [isAuthenticated],
		...daybookRoter
	},
	{
		path: '/auth',
		...authRoter
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
