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
		case Actions.sortMedia:
			return {
				...state,
				gallary: state.gallary.splice(action.hoverIndex, 0, action.dragCard),
			};
		default:
			return { ...state };
	}
};
export default gallaryRuducer;
