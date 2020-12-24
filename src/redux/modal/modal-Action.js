import Actions from "./modalActionTypes.js";

export const openModal = (position, src) => ({
	type: Actions.openModal,
	img: src,
	position: position,
});

export const closeModal = (src) => ({
	type: Actions.closeModal,
	payload: src,
});
export const changeModalImg = (src) => ({
	type: Actions.changeModalImg,
	payload: src,
});
