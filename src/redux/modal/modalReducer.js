import Actions from "./modalActionTypes";

const initialState = {
	modalOpen: false,
};

const modalRuducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.toggleModal:
			return { ...state, modalOpen: !state.modalOpen };
		default:
			return state;
	}
};
export default modalRuducer;
