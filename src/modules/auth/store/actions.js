// export const myAction = async ({commit})=>{

import authApi from '../../../api/authApi';

// }
export const createUser = async ({ commit }, user) => {
	const { username, email, password } = user;
	console.log({ username });
	try {
		const { data } = await authApi.post(':signUp', {
			email,
			password,
			returnSecureToken: true
		});

		const { idToken, refreshToken } = data;

		await authApi.post(':update', {
			displayName: username,
			idToken
		});

		delete user.password;
		commit('loginUser', { user, idToken, refreshToken });
		return { ok: true };
	} catch (error) {
		console.log(error);
		return { ok: false, message: error.response.data.error.message };
	}
};

export const signInUser = async ({ commit }, user) => {
	const { email, password } = user;

	try {
		const { data } = await authApi.post(':signInWithPassword', {
			email,
			password,
			returnSecureToken: true
		});

		const { displayName, idToken, refreshToken } = data;
		user.name = displayName;

		commit('loginUser', { user, idToken, refreshToken });
		return { ok: true };
	} catch (error) {
		console.log(error);
		return { ok: false, message: error.response.data.error.message };
	}
};

export const checkAuth = async ({ commit }) => {
	const idToken = localStorage.getItem('idToken');
	const refreshToken = localStorage.getItem('refreshToken');

	if (!idToken) {
		commit('logoutUser');
		return { ok: false, message: 'No token' };
	}

	try {
		const { data } = await authApi.post(':lookup', {
			idToken
		});

		const { displayName, email } = data;
		const user = {
			name: displayName,
			email
		};

		commit('loginUser', { user, idToken, refreshToken });
		return { ok: true };
	} catch (error) {
		console.log(error);
		return { ok: false, message: error.response.data.error.message };
	}
};
