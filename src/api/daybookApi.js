import axios from 'axios';

const daybookApi = axios.create({
	baseURL: 'https://daybook-460dd-default-rtdb.firebaseio.com/'
});

export default daybookApi;
