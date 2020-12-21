import { combineReducers } from "redux";
import gallaryRuducer from "./gallary/galaryReducer";
import mediaRedecer from "./media-side-bar/mediaReducer";

export default combineReducers({
	media: mediaRedecer,
	gallary: gallaryRuducer,
});
