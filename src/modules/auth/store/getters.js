// export const myGetter = (state)=>{
//return state.algo
// }

export const currentState = state => {
	return state.status;
};

export const currentUser = state => {
	return state.user?.name || '';
};
