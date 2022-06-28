import daybookApi from '@/api/daybookApi';

export const loadEntries = async ({ commit }) => {
	const { data } = await daybookApi.get('entries.json');
	const entries = [];
	for (let id of Object.keys(data)) {
		entries.push({ id, ...data[id] });
	}
	commit('setEntries', entries);
};

export const updateEntries = async ({ commit }, entry) => {
	const { text, date, picture } = entry;
	const dataToUpdate = { text, date, picture };
	const { data } = await daybookApi.put(
		`entries/${entry.id}.json`,
		dataToUpdate
	);
	commit('updateEntry', { ...entry });
};

export const createEntries = async ({ commit }, entry) => {
	const { text, date, picture } = entry;
	const dataToCreate = { text, date, picture };
	const { data } = await daybookApi.post(
		`entries.json`,
		dataToCreate
	);
	dataToCreate.id = data.name;
	commit('createEntry', { ...dataToCreate });

	return data.name;
};
