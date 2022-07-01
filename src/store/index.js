import { createStore } from 'vuex';

import daybook from '../modules/daybook/store/daybook';
import auth from '../modules/auth/store/';

export default createStore({
	modules: {
		auth,
		daybook
	}
});
