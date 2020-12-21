import Actions from "./gallaryActionTypes";

export const MediaDropInGallary = (src) => ({
	type: Actions.mediaDrop,
	payload: src,
});
