import Actions from "./mediaActionTypes";

const initialState = {
	media: [],
};

const mediaRuducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.fetch_Media:
			return { ...state, media: action.payload };
		default:
			return state;
	}
};
export default mediaRuducer;
