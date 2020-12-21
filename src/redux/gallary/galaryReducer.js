import Actions from "./gallaryActionTypes";

const initialState = {
	gallary: [],
};

const gallaryRuducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.mediaDrop:
			return {
				...state,
				gallary: [...state.gallary, action.payload],
			};

		default:
			return { ...state };
	}
};
export default gallaryRuducer;
