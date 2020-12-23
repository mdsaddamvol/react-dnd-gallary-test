import Actions from "./mediaActionTypes";

const initialState = {
	media: [],
};
const modifyinitialInput = (arr1) => {
	const obj1 = { modalOpen: false, data: [] };
	let arr3 = [];

	arr1.forEach((obj) => {
		arr3.push({ id: obj.char_id, img: obj.img, ...obj1 });
	});

	return arr3;
};

const mediaRuducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.fetch_Media:
			return { ...state, media: modifyinitialInput(action.payload) };
		default:
			return state;
	}
};
export default mediaRuducer;
