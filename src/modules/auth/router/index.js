export default {
	name: 'auth',
	component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
	children: [
		{
			path: '',
			name: 'login',
			component: () => import('@/modules/auth/views/LoginView.vue')
		},
		{
			path: '/registrar',
			name: 'registrar',
			component: () => import('@/modules/auth/views/RegisterView.vue')
		}
	]
};
