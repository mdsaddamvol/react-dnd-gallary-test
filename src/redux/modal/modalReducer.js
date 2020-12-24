import Actions from "./modalActionTypes";

const initialState = {
	modalOpen: false,
	modalimg: "",
	position: { left: 0, top: 0 },
};

const modalRuducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.openModal:
			return {
				...state,
				modalOpen: !state.modalOpen,
				modalimg: action.img,
				position: action.position,
			};
		case Actions.closeModal:
			return {
				...state,
				modalOpen: !state.modalOpen,
			};

		case Actions.changeModalImg:
			return {
				...state,
				modalimg: action.payload,
			};
		default:
			return state;
	}
};
export default modalRuducer;
