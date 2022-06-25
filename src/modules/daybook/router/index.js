export default {
	name: 'daybook',
	component: () =>
		import('@/modules/daybook/layouts/DayBookLayout.vue'),
	children: [
		{
			path: '',
			name: 'no-entry',
			component: () =>
				import('@/modules/daybook/views/NoEntrySelected.vue')
		},
		{
			path: ':id',
			name: 'Entry',
			component: () => import('@/modules/daybook/views/EntryView.vue')
		}
	]
};
