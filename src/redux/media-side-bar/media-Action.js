import Actions from "./mediaActionTypes.js";

export const fetchMediaStateAsync = (data) => ({
	type: Actions.fetch_Media,
	payload: data,
});

export const fetchMedia = (dat) => {
	return (dispach) => {
		dispach(fetchMediaStateAsync(dat));
	};
};
