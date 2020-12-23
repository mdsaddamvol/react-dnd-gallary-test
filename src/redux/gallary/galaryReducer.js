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
		case Actions.sortedGallary:
			return {
				...state,
				gallary: action.payload,
			};
		case Actions.deletePic:
			return {
				...state,
				gallary: state.gallary.filter((obj, index) => {
					return obj.img !== action.payload;
				}),
			};
		default:
			return { ...state };
	}
};
export default gallaryRuducer;
