import { createStore } from 'vuex';

import daybook from '../modules/daybook/store/daybook';

export default createStore({
	modules: {
		daybook
	}
});
