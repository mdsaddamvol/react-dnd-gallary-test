import Actions from "./gallaryActionTypes";

export const MediaDropInGallary = (src) => ({
	type: Actions.mediaDrop,
	payload: src,
});

export const sortMedia = (hoverIndex, dragCard) => ({
	type: Actions.sortMedia,
	hoverIndex,
	dragCard,
});
