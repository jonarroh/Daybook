import { computed } from 'vue';
import { useStore } from 'vuex';



const useAuth = () => {
	const store = useStore();

	const createUser = async user => {
		const resp = await store.dispatch('auth/createUser', user);

		return resp;
	};

	const logiUser = async user => {
		const resp = await store.dispatch('auth/signInUser', user);

		return resp;
	};

	const checkAuth = async () => {
		const resp = await store.dispatch('auth/checkAuth');

		return resp;
	};

	const logout = () => {
		store.commit('auth/logoutUser');
		store.commit('daybook/clearEntry');
	};

	

	return {
		createUser,
		logiUser,
		checkAuth,
		authStatus: computed(() => store.getters['auth/currentState']),
		username: computed(() => store.getters['auth/currentUser']),
		logout
	};
};

export default useAuth;
