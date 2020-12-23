import Actions from "./gallaryActionTypes";

export const MediaDropInGallary = (src) => ({
	type: Actions.mediaDrop,
	payload: src,
});

export const sortedGallary = (props) => ({
	type: Actions.sortedGallary,
	payload: props,
});

export const deletePic = (props) => ({
	type: Actions.deletePic,
	payload: props,
});
