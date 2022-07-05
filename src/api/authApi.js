import axios from 'axios';

const authApi = axios.create({
	baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
	params: {
		key: 'AIzaSyBpoTiv1wR6Xx3byTe6iM7rOH0NWTu3WY0'
	}
});

export default authApi;
