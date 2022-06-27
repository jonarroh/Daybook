import daybookApi from '@/api/daybookApi';

export const loadEntries = async ({ commit }) => {
	const { data } = await daybookApi.get('entries.json');
	const entries = [];
	for (let id of Object.keys(data)) {
		entries.push({ id, ...data[id] });
	}
	commit('setEntries', entries);
};

export const updateEntries = async ({ commit }) => {};

export const createEntries = async ({ commit }) => {};
